module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Categories",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category_name: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "categories",
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Products, {
      foreignKey: "category_id",
      as: "products",
    });
  };

  return Category;
};
