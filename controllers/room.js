const express = require("express");
const router = express.Router();
const db = require("../models")

//all routes below start with /api/hall
router.get("/", (req, res) => {
    //get all the halls attached to the user with a sent id of req.params, fancy: verify that session user is the right one.
    db.Room.create({

        name: req.body.name,
        password: req.body.password
        
    }).then(newRoom => {
        res.json(newRoom)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

router.get("/:id", (req, res) => {
    db.Room.findOne({
        where: {id:req.params.id}
    }).then(foundRoom =>{
        res.json(foundRoom)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router