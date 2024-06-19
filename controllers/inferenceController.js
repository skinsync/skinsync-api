const predictClassification = require("../services/skintypePrediction");
const getRecommendationProduct = require("../services/skincareRecommendation");
const Product = require("../models").Product;
const { Op, QueryTypes } = require("sequelize");
const sequelize = require("../models").sequelize;

exports.predictSkintype = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "Image must be provided",
    });
  }

  try {
    const model = req.app.locals.predictionModel;
    const image = req.file.buffer;
    const result = await predictClassification(model, image);

    return res.status(200).json({
      message: "Prediction success",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getRecommendation = async (req, res) => {
  
  try {
    const { skintype, product_type, notable_effects } = req.body;
    const model = req.app.locals.recommendationModel;
    const result = await getRecommendationProduct(
      model,
      skintype,
      product_type,
      notable_effects
    );

    return res.status(200).json({
      message: "Recommendation success",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getRecommendationProducts = async (req, res) => {
  try {
    const { skintype, product_type, notable_effects } = req.body;
    let notableEffectsStripped = notable_effects.replace(/'/g, '"');
    let notableEffectsArray = JSON.parse(notableEffectsStripped);
    let whereClause = "WHERE 1=1";

    if (skintype) {
      whereClause += ` AND p.skintype LIKE '%${skintype}%'`;
    }

    if (product_type) {
      whereClause += ` AND pt.name = '${product_type}'`;
    }

    if (notableEffectsArray && notableEffectsArray.length > 0) {
      const notableEffectsCondition = notableEffectsArray
        .map((ne) => `p.notable_effects LIKE '%${ne}%'`)
        .join(" AND ");
      whereClause += ` AND (${notableEffectsCondition})`;
    }

    const query = `
    SELECT
      b.name AS brand,
      pt.name AS product_type,
      p.name AS name,
      p.description AS description,
      p.notable_effects AS notable_effects,
      p.skintype AS skintype,
      p.price AS price,
      p.url AS url,
      p.picture AS picture,
      p.priority AS priority,
      p.createdAt AS createdAt,
      p.updatedAt AS updatedAt
    FROM
      products p
    LEFT JOIN
      brands b ON p.brand_id = b.id
    LEFT JOIN
      product_types pt ON p.product_type_id = pt.id
    ${whereClause};
  `;
    const results = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).json({
      message: "Success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
