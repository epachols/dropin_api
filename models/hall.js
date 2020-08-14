module.exports = function(sequelize, DataTypes) {
    var Hall = sequelize.define('Hall', {
        name:DataTypes.STRING,
        password:DataTypes.STRING,
        hall_size:DataTypes.INTEGER,
        theme_id:DataTypes.STRING,
    });

//     Hall.associate = function(models) {
//         // add associations here
//         // ex:Hall.hasMany(models.Room);
//     };

    return Hall;
};