const express = require("express");
const router = express.Router();
const db = require("../models")

//all routes below start with /api/halls
router.get("/:id", (req, res) => {
    //get all the halls attached to the user with a sent id of req.params, fancy: verify that session user is the right one.
    db.findAll({
        where: {
            //user id = req.params.id (OR req.session.id)
        }
    })
})

router.post("/create", (req, res) => {
    if (!req.session.user) {
        res.status(401).send("login required to create a hall")
    }
    else {
        db.Hall.create({
            name: req.body.name ,
            password: req.body.password,
            description: req.body.description,
            hallSize: req.body.hallSize
        }).then(newHall => {
            res.json(newHall)
        }).catch(err => {
            console.log(err);
            res.status(500).end();
        })
    }
})

//may not need router.put for halls, unless we expand configuration options

router.delete("/:id", (req, res) => {
    db.Hall.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedHall => {
        res.json(deletedHall)
    }).catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router
