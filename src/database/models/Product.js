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

  return Product;
};
