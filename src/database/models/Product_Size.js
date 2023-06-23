module.exports = (sequelize, DataTypes) => {
  const Product_Size = sequelize.define(
    "Product_Sizes",
    {
      product_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      size_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "product_sizes",
      timestamps: false,
    }
  );

  Product_Size.associate = (models) => {
    Product_Size.belongsTo(models.Products, {
      foreignKey: "product_id",
      as: "products",
    });

    Product_Size.belongsTo(models.Sizes, {
      foreignKey: "size_id",
      as: "sizes",
    });
  };

  return Product_Size;
};
