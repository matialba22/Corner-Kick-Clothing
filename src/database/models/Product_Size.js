module.exports = (sequelize, DataTypes) => {
  const Product_Size = sequelize.define(
    "Product_Size",
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

  return Product_Size;
};
