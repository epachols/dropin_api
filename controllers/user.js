const express = require("express");
const router = express.Router();
const db = require("../models")
const bcrypt = require('bcrypt')
const session = require('express-session')
//all routes here will start with /api/users


//for creating a new user
router.post("/signup", (req, res) => {
    //TODO: PUT THIS IN THE HALL ONE BUT NOT USER HERE enable session user check when login authentication getting up and running.
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

//This route finds a single user by their email to log them in
router.post("/login", (req, res) => {
    db.User.findOne({

        where: {email: req.body.email}

    }).then(user =>{

        if(!user) {
            res.status(404).send("no such user exists")
        } else {
            if(bcrypt.compareSync(req.body.password,user.password)) {
                req.session.user = {
                    name:user.name,
                    email:user.email,
                    id:user.id
                }

                console.log("req.session", req.session)

                res.send("logged in")
            } else {
                res.status(401).send("wrong password")
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

//ROUTE FOR USER HOME PAGE

router.get('/readsessions', (req,res)=>{
    res.json(req.session);
})


module.exports = router