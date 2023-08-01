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
      subcategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img_1: {
        type: DataTypes.STRING,
        defaultValue: "default_prod.png",
      },
      img_2: {
        type: DataTypes.STRING,
        defaultValue: "default_prod.png",
      },
      img_3: {
        type: DataTypes.STRING,
        defaultValue: "default_prod.png",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: "products", timestamps: false }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Categories, {
      foreignKey: "category_id",
      as: "categories",
    });

    Product.belongsTo(models.Subcategories, {
      foreignKey: "subcategory_id",
      as: "subcategories",
    });

    Product.belongsTo(models.Brands, {
      foreignKey: "brand_id",
      as: "brands",
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
