module.exports = function(sequelize, DataTypes) {
    var Hall = sequelize.define('Hall', {
        name:DataTypes.STRING,
        password:DataTypes.STRING,
        description:DataTypes.STRING,
        hallSize:DataTypes.INTEGER,
    });

//     Hall.associate = function(models) {
    // Hall.belongsTo(models.User { as: "Moderator", foreignKey : "userId" });
    // Hall.hasMany(models.Room, {
            //     as: "main",
            //     foreignKey: "HallId",
            //     onDelete: "cascade",
            // });
//         // ex:Hall.hasMany(models.Room);
//     };

    return Hall;
};