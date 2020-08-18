const express = require("express");
const router = express.Router();
const db = require("../models")
//all routes here will start with /api/users


//for creating a new user
router.post("/", (req, res) => {
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

//This route finds a single user by their ID - useful for after login
router.get("/:id", (req, res) => {
    db.User.findOne({
        where: {id:req.params.id}
    }).then(foundUser =>{
        res.json(foundUser)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router