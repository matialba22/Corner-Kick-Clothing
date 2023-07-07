const db = require("../database/models");

const shopController = {
  list: () => {
    return db.Products.findAll();
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
    let subcategories = db.Subcategories.findAll();

    Promise.all([brands, categories, subcategories]).then(
      ([brands, categories, subcategories]) => {
        return res.render("./products/createProduct", {
          brands,
          categories,
          subcategories,
        });
      }
    );
  },

  storeProduct: (req, res) => {
    const files = req.files;

    db.Products.create({
      name: req.body.name,
      price: req.body.price,
      category_id: req.body.category,
      brand_id: req.body.brand,
      subcategory_id: req.body.subcategory,
      img_1: files[0] ? files[0].filename : null,
      img_2: files[1] ? files[1].filename : null,
      img_3: files[2] ? files[2].filename : null,
    }).then(res.redirect("/shop"));
  },

  edit: (req, res) => {
    let brands = db.Brands.findAll();
    let categories = db.Categories.findAll();
    let subcategories = db.Subcategories.findAll();

    Promise.all([brands, categories, subcategories])
      .then(([brands, categories, subcategories]) => {
        return db.Products.findByPk(req.params.id)
          .then((product) => {
            res.render("./products/editProduct", {
              product,
              brands,
              categories,
              subcategories,
            });
          })
          .catch((error) => {
            console.log(error);
            res.sendStatus(500);
          });
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },

  updateProduct: (req, res) => {
    db.Products.update(
      {
        name: req.body.name,
        price: req.body.price,
        category_id: req.body.category,
        subcategory_id: req.body.subcategory,
        brand_id: req.body.brand,
        img_1:
          req.files && req.files[0]
            ? req.files[0].filename
            : db.Sequelize.literal("img_1"),
        img_2:
          req.files && req.files[1]
            ? req.files[1].filename
            : db.Sequelize.literal("img_2"),
        img_3:
          req.files && req.files[2]
            ? req.files[2].filename
            : db.Sequelize.literal("img_3"),
      },
      {
        where: { id: req.params.id },
      }
    )
      .then(() => {
        res.redirect("/shop/details/" + req.params.id);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },

  deleteProduct: (req, res) => {
    db.Products.destroy({
      where: { id: req.params.id },
    })
      .then(() => {
        res.redirect("/shop");
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  },
};

module.exports = shopController;
