const db = require("../database/models");

const shopController = {
  list: () => {
    return db.Products.findAll({
      include: [{ association: "product_images" }],
    });
  },

  shop: (req, res) => {
    shopController
      .list()
      .then((products) => {
        console.log(this);
        res.render("./products/shop", { products });
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },
};

module.exports = shopController;
