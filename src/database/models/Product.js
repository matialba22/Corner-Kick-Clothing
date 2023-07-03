module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Products",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { tableName: "products", timestamps: false }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Categories, {
      foreignKey: "category_id",
      as: "categories",
    });

    Product.belongsTo(models.Brands, {
      foreignKey: "brand_id",
      as: "brands",
    });

    Product.hasMany(models.Product_Images, {
      foreignKey: "product_id",
      as: "product_images",
    });

    Product.belongsToMany(models.Sizes, {
      through: "product_sizes",
      foreignKey: "product_id",
      otherKey: "size_id",
      as: "sizes",
    });
  };

  return Product;
};
