module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
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
      },

      brand_id: {
        type: DataTypes.INTEGER,
      },
    },
    { tableName: "products", timestamps: false }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "categories",
    });
  };

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, {
      foreignKey: "brand_id",
      as: "brands",
    });
  };

  Product.associate = (models) => {
    Product.hasMany(models.ProductImage, {
      foreignKey: "product_id",
      as: "images",
    });
  };

  Product.associate = (models) => {
    Product.belongsToMany(models.Size, {
      through: "product_sizes",
      foreignKey: "product_id",
      otherKey: "size_id",
      as: "sizes",
    });
  };

  return Product;
};
