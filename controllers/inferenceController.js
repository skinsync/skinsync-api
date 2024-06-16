const predictClassification = require("../services/skintypePrediction");
const getRecommendationProduct = require("../services/skincareRecommendation");

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
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getRecommendation = async (req, res) => {
  // const { skintype, product_type, notable_effects } = req.body;

  const skintype = 'Normal'
  const productType = 'Cleanser'
  const notableEffects = ['Brightening', 'Hydrating']

  try {
    const model = req.app.locals.recommendationModel;
    const result = await getRecommendationProduct(model, skintype, productType, notableEffects);

    return res.status(200).json({
      message: "Recommendation success",
      data: result,
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}