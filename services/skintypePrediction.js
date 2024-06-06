async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);
    const result = prediction.dataSync();
    const max = Math.max(...result);
    const maxIndex = result.indexOf(max);

    return {
      prediction: maxIndex,
      confidence: max,
    };
  }
  catch (error) {
    throw new Error(error);
  }
}

module.exports = predictClassification;