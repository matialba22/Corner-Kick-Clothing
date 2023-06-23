const db = require("../database/models");

const shopController = {
  shop: (req, res) => {
    db.Products.findAll({
      include: [{ association: "product_images" }],
    })
      .then((products) => {
        res.render("./products/shop", {
          products,
          product_images: products.product_images,
        });
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },
};

module.exports = shopController;
