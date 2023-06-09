module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    "Subcategory",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      subcategory_name: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "subcategories",
      timestamps: false,
    }
  );

  Subcategory.associate = (models) => {
    Subcategory.belongsTo(models.Category, {
      foreignKey: "subcategory_id",
      as: "categories",
    });
  };

  return Subcategory;
};
