const { User, SavedProduct } = require("../models");

exports.getListSavedProducts = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: {nested: true, all: true},
    });

    const products = user.products.map(product => {
      const { SavedProduct, ...rest } = product.toJSON();
      return rest;
    });

    res.json({
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.saveProduct = async (req, res) => {
  try {
    const record = await SavedProduct.create({
      user_id: req.user.id,
      product_id: req.params.id,
    });
    const response = {
      data: record,
      message: "Product saved",
    };
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.deleteSavedProduct = async (req, res) => {
  try {
    const record = await SavedProduct.destroy({
      where: {
        user_id: req.user.id,
        product_id: req.params.id,
      },
    });
    if (!record) return res.status(404).json({ error: "Record not found" });
    res.json({ message: "Product unsaved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
