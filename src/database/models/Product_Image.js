module.exports = (sequelize, DataTypes) => {
  const Product_Image = sequelize.define(
    "Product_Images",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image_url: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "product_images",
      timestamps: false,
    }
  );

  Product_Image.associate = (models) => {
    Product_Image.belongsTo(models.Products, {
      foreignKey: "product_id",
      as: "products",
    });
  };

  return Product_Image;
};
