module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brands",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      brand_name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "brands",
      timestamps: false,
    }
  );

  Brand.associate = (models) => {
    Brand.hasMany(models.Products, {
      foreignKey: "brand_id",
      as: "products",
    });
  };

  return Brand;
};
