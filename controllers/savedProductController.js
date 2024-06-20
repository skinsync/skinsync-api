const { User, SavedProduct, Product, Brand, ProductType } = require("../models");

exports.getListSavedProducts = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      include: {
        model: Product,
        as: 'savedProducts',
        include: [
          {
            model: Brand,
            as: 'brand',
          },
          {
            model: ProductType,
            as: 'product_type',
          },
        ],
        through: {
          attributes: [],
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const products = user.savedProducts.map(product => {
      const { SavedProduct, ...rest } = product.toJSON();
      return rest;
    });

    res.json({
      data: products,
    });
  } catch (error) {
    console.error('Error fetching saved products:', error);
    res.status(500).json({ error: error.message });
  }
}

exports.saveProduct = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const record = await SavedProduct.create({
      user_id: userId,
      product_id: productId,
    });

    const response = {
      data: record,
      message: "Product saved",
    };
    res.status(201).json(response);
  } catch (error) {
    console.error('Error saving product:', error);
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

    if (record === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product unsaved" });
  } catch (error) {
    console.error('Error deleting saved product:', error);
    res.status(500).json({ error: error.message });
  }
}
