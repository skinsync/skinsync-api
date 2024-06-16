const tf = require("@tensorflow/tfjs-node");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classes = ["Berjerawat", "Berminyak", "Kering", "Normal"];
    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    const predictionParsed = classes.map((label, index) => ({
      label,
      score: `${(score[index] * 100).toFixed(2)}%`,
    }));

    let result;
    let probability;

    if (confidenceScore >= 0.5) {
      result = label;
      probability = (`${(confidenceScore).toFixed(2)}%`);
    } else {
      result = "Tidak Dapat Diklasifikasikan";
      probability = (`${(confidenceScore).toFixed(2)}%`);
    }

    return {
      prediction: predictionParsed,
      result,
      probability,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = predictClassification;
