async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    // const prediction = model.predict(tensor);
    // const result = prediction.dataSync();
    // const max = Math.max(...result);
    // const maxIndex = result.indexOf(max);

    // return {
    //   prediction: maxIndex,
    //   confidence: max,
    // };

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classes = ['Berjerawat', 'Berminyak', 'Kering', 'Normal'];

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    return {
      prediction: label,
      confidence: confidenceScore,
    };
  }
  catch (error) {
    throw new Error(error);
  }
}

module.exports = predictClassification;