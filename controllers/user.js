const express = require("express");
const router = express.Router();
const db = require("../models")
const bcrypt = require('bcrypt')
//all routes here will start with /api/users


//for creating a new user
router.post("/signup", (req, res) => {
    //TODO: enable session user check when login authentication getting up and running.
    // if(!req.session.user){
    //     res.status(401).send("login required")
    // }
    // else {

        db.User.create({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description
            
        }).then(newUser => {
            res.json(newUser)
        }).catch(err => {
            console.log(err);
            res.status(500).end()
        })
    // }
})

//This route finds a single user their email
router.post("/login", (req, res) => {
    db.User.findOne({
        where: {email: req.body.email}
        //TODO: change to req.session.id after we save a session object at login. 
    }).then(user =>{
        if(!user) {
            res.status(404).send("no such user exists")
        } else {
            if(bcrypt.compareSync(req.body.password,user.password)) {
                res.send("logged in")
            } else {
                res.send("wrong password")
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router