module.exports = function (sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  Room.associate = function (models) {
    Room.belongsTo(models.Hall, { as: "Main", foreignKey: "HallId" });
    Room.belongsTo(models.User, { as: "Owner", foreignKey : "ownerId" })
  };

  return Room;
};
