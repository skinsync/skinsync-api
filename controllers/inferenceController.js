// const predictClassification = require("../services/skintypePrediction");

// exports.predictSkintype = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({
//       message: "Image must be provided",
//     });
//   }

//   try {
//     const model = req.app.locals.model;
//     const image = req.file.buffer;
//     const result = await predictClassification(model, image);

//     return res.status(200).json(result);
//   }
//   catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };