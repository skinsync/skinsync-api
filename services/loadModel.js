const tf = require('@tensorflow/tfjs-node');
const dotenv = (require("dotenv").config()).parsed

async function loadModel() {
  const model = await tf.loadLayersModel(dotenv.MODEL_URL);
  return model;
}

module.exports = loadModel;