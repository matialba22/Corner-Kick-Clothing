module.exports = (sequelize, DataTypes) => {
  const Product_Image = sequelize.define(
    "Product_Image",
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

  return Product_Image;
};
