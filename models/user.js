const bcrypt = require('bcrypt')

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

    //password encryption beforecreate hook
    User.beforeCreate(function(user){
        user.password= bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });
    
    return User;
};