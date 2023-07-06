module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    "Subcategories",
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
        allowNull: false,
      },
    },
    {
      tableName: "subcategories",
      timestamps: false,
    }
  );

  Subcategory.associate = (models) => {
    Subcategory.belongsTo(models.Categories, {
      foreignKey: "category_id",
      as: "categories",
    });

    Subcategory.hasMany(models.Products, {
      foreignKey: "subcategory_id",
      as: "products",
    });
  };

  return Subcategory;
};
