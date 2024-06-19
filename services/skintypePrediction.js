const tf = require("@tensorflow/tfjs-node");

async function predictClassification(model, image) {
  try {
    let tensor = tf.node.decodeImage(image, 3);
    tensor = tf.image.resizeBilinear(tensor, [224, 224]);
    tensor = tensor.expandDims(0);
    tensor = tensor.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1.0));

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classes = ["berjerawat", "berminyak", "kering", "normal"];
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
