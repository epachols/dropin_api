module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define('Room', {
        name:DataTypes.STRING,
        password:DataTypes.STRING,
        // room_size:DataTypes.INTEGER,
        theme_id:DataTypes.STRING,
    });

//     Room.associate = function(models) {
//         // add associations here
//         // ex:Hall.hasMany(models.Room);
//         // or:Room.belongsTo(models.Hall)
//     };

    return Room;
};