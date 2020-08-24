module.exports = function (sequelize, DataTypes) {
  var Hall = sequelize.define("Hall", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    hallSize: DataTypes.INTEGER,
  });

  Hall.associate = function (models) {
    Hall.hasMany(models.Room, {
      as: "Main",
      foreignKey: "HallId",
      onDelete: "cascade",
    });

    Hall.belongsTo(models.User, { as: "Moderator", foreignKey: "UserId" });
  };

  return Hall;
};
