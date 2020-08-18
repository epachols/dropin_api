module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name:DataTypes.STRING,
        password:DataTypes.STRING,
        email:{
        type:DataTypes.STRING,
        unique:true,
        },
        description:DataTypes.STRING
    });

//     User.associate = function(models) {
//         // add associations here
//         // ex:Hall.hasMany(models.Room);
//     };

    return User;
};