module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
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

  return Category;
};
