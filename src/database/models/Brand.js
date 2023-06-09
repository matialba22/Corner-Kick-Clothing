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

  return Brand;
};
