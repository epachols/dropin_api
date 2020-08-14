const express = require("express");
const router = express.Router();
const db = require("../models")

//all routes below start with /api/hall
router.get("/", (req, res) => {
    
})

router.post("/", (req, res) => {
    if(!req.session.user){
        res.status(401).send("login required")
    } 
    else {
        //create a hall saving the roomname, db.Hall.create({ key: req.body.key }).then(newHall => {res.json(newHall)}).catch(err) => {console.log(err); res.status(500).end();}
        //password(randomly selected)
        //possibly adding in hall configuration options later (no youtube? color themes? etc. could really shine here)
    }
})

//may not need router.put for halls, unless we expand configuration options

router.delete("/:id", (req, res) => {
    // db.Hall.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // }),then(deletedHall => {
    //     res.json(deletedHall)
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).end();
    // })
})