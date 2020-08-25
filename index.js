//primary server file for API for dropin
var express = require('express');
const cors =require("cors");
const session = require('express-session')
require("dotenv").config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var allRoutes = require('./controllers');

// Requiring our models for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----------------------------------------------------
//DEVELOPMENT ENVIRONMENT CONFIG
// app.use(cors({
//   origin:["http://localhost:3000"],
//   credentials:true
// }))

// app.use(session({
//   //TODO: make this a secret when going live after dropping the db
//     secret: "keyboard cat", 
//     resave: false, 
//     saveUninitialized: false,
//     cookie : {
//       maxAge:2*60*60*1000,
//     }
// }))
// --------------------------------------------------------


//TODO: change the above cors usage for the below for production environment
app.use(cors({
  origin:["https://dropinsamine.herokuapp.com"],
  credentials:true
}))

//TODO: production environment
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false,
    proxy:true,
    cookie : {
      maxAge:2*60*60*1000, 
      sameSite:"none",
      secure:true
    }
}))


app.use('/',allRoutes);

//TODO: switch between force:true for dev and force:false for live
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});