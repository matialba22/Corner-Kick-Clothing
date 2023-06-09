module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    "Size",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      size_name: {
        type: DataTypes.STRING,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "sizes",
      timestamps: false,
    }
  );

  return Size;
};
