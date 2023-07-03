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
        res.render("./products/shop", { products });
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },

  create: (req, res) => {
    let brands = db.Brands.findAll();
    let categories = db.Categories.findAll();
    let sizes = db.Sizes.findAll();

    Promise.all([brands, categories, sizes]).then(
      ([brands, categories, sizes]) => {
        return res.render("./products/createProduct", {
          brands,
          categories,
          sizes,
        });
      }
    );
  },
};

module.exports = shopController;
