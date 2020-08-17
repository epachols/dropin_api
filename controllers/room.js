const express = require("express");
const router = express.Router();
const db = require("../models")

//all routes below start with /api/hall
router.post("/", (req, res) => {
    
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