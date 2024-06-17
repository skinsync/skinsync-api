const predictClassification = require("../services/skintypePrediction");
const getRecommendationProduct = require("../services/skincareRecommendation");
const Product = require("../models").Product;
const { Op, QueryTypes } = require('sequelize');
const sequelize = require('../models').sequelize;

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
  // const { skintype, product_type, notable_effects } = req.body;

  const skintype = "Normal";
  const productType = "Cleanser";
  const notableEffects = ["Brightening", "Hydrating"];

  try {
    const model = req.app.locals.recommendationModel;
    const result = await getRecommendationProduct(
      model,
      skintype,
      productType,
      notableEffects
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
  // const { skintype, productType, notableEffects } = req.body;

  // Building filter object based on provided query parameters
  // const filter = {};

  // if (skintype) {
  //   filter.skintype = skintype;
  // }
  // if (productType) {
  //   filter.productType = productType;
  // }
  // if (notableEffects) {
  //   // Convert notableEffects to array if it's a comma-separated string
  //   const effectsArray =
  //     typeof notableEffects === "string"
  //       ? notableEffects.split(",")
  //       : notableEffects;
  //   // Use sequelize's 'contains' operator for JSONB array containment
  //   filter.notableEffects = {
  //     [Op.contains]: effectsArray,
  //   };
  // }

  // try {
  //   // Query products using the constructed filter
  //   const products = await Product.findAll({
  //     where: filter,
  //     include: [{ all: true, nested: true }],
  //   });

  //   const products = await sequelize.query(
  //     'SELECT * FROM products WHERE skintype = :skintype',
  //     {
  //       replacements: { skintype: skintype },
  //       type: QueryTypes.SELECT
  //     });

  //   res.status(200).json(products);
  // } catch (err) {
  //   console.error("Error fetching products:", err);
  //   res.status(500).json({ error: "Error fetching products" });
  // }

  const { skintype, productType, notableEffects } = req.body;
  console.log("skintype", skintype);
  console.log("productType", productType);
  console.log("notableEffects", notableEffects);
  console.log("req.body", req.body);

  let notableEffectsStripped = notableEffects.replace(/'/g, '"');
  let notableEffectsArray = JSON.parse(notableEffectsStripped);
  let whereClause = 'WHERE 1=1';

  // if (skintype && skintype.length > 0) {
  //   const skintypeCondition = skintype.map(st => `'${st}'`).join(', ');
  //   whereClause += ` AND p.skintype IN (${skintypeCondition})`;
  // }

  if (skintype) {
    whereClause += ` AND p.skintype LIKE '%${skintype}%'`;
  }

  if (productType) {
    whereClause += ` AND pt.name = '${productType}'`;
  }

  if (notableEffectsArray && notableEffectsArray.length > 0) {
    const notableEffectsCondition = notableEffectsArray.map(ne => `p.notable_effects LIKE '%${ne}%'`).join(' OR ');
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

  try {
    const results = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json({
      message: "Success",
      data: results
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
