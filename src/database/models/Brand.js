module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
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
    Brand.hasMany(models.Product, {
      foreignKey: "brand_id",
      as: "products",
    });
  };

  return Brand;
};
