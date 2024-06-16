const tf = require("@tensorflow/tfjs-node");

async function loadPredictionModel() {
  try {
    model = await tf.loadGraphModel(process.env.SKINTYPE_PREDICTION_MODEL_URL);
    console.log("Skintype Prediction Model loaded successfully");
    return model;
  } catch (err) {
    console.error("Error loading Skintype Prediction Model", err);
  }
}

async function loadRecommendationModel() {
  try {
    model = await tf.loadGraphModel(
      process.env.SKINCARE_RECOMMENDATION_MODEL_URL
    );
    console.log("Recommendation Model loaded successfully");
    return model;
  } catch (err) {
    console.error("Error loading Skincare Recommendation Model", err);
  }
}

module.exports = {
  loadPredictionModel,
  loadRecommendationModel,
};
