const tf = require("@tensorflow/tfjs-node");

async function getRecommendationProduct(
  model,
  skintype,
  productType,
  notableEffects
) {
  try {
    // Extract and normalize the features manually as per your CSV data.
    const skintype_normalized =
      skintype === "Berjerawat"
        ? 0.7844682712818338
        : skintype === "Berminyak"
        ? 0.7844682712818338
        : skintype === "Kering"
        ? 0.7844682712818338
        : skintype === "Normal"
        ? -0.46657778550761003
        : 0;

    const productType_normalized =
      productType === "Cleanser"
        ? -1.5026960765297643
        : productType === "Moisturizer"
        ? -1.5026960765297643
        : productType === "Serum"
        ? -1.5026960765297643
        : productType === "Sunscreen"
        ? -1.5026960765297643
        : 0;

    const notableEffects_normalized = notableEffects.includes("Brightening")
      ? -1.1601200430983625
      : notableEffects.includes("Hydrating")
      ? 1.2679598010406496
      : notableEffects.includes("Acne-fighting")
      ? -1.1601200430983625
      : notableEffects.includes("Anti-aging")
      ? -1.1601200430983625
      : notableEffects.includes("Exfoliating")
      ? 1.2679598010406496
      : notableEffects.includes("Soothing")
      ? 1.2679598010406496
      : 0;

    const input = tf.tensor2d([
      [skintype_normalized, productType_normalized, notableEffects_normalized],
    ]);

    const prediction = model.predict(input);
    const result = prediction.dataSync();
    console.log("prediction", prediction);
    console.log("result", result);

    const recommendation = result.map((score, index) => ({
      product: index + 1,
      score: `${(score * 100).toFixed(2)}%`,
    }));

    return recommendation;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = getRecommendationProduct;
