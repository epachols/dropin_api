module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        user_name:DataTypes.STRING,
        password:DataTypes.STRING,
        email:{
        type:DataTypes.STRING,
        unique:true,
        },
        about:DataTypes.STRING
    });

//     User.associate = function(models) {
//         // add associations here
//         // ex:Hall.hasMany(models.Room);
//     };

    return User;
};