const Brand = require("../models").Brand;
const ProductType = require("../models").ProductType;

exports.getListBrand = async (req, res) => {
  try {
    const brands = await Brand.findAll({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
    });
    res.json({
      data: brands,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getListProductType = async (req, res) => {
  try {
    const brands = await ProductType.findAll({
      attributes: ["id", "name"],
      order: [["id", "ASC"]],
    });
    res.json({
      data: brands,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};