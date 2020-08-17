const express = require("express");
const router = express.Router();
const db = require("../models")

//all routes below start with /api/hall
router.get("/", (req, res) => {
    //get all the halls attached to the user with a sent id of req.params, fancy: verify that session user is the right one.
    db.findAll({
        where: {
            //put joined id logic here
        }
    })
})

router.post("/", (req, res) => {
    // if (!req.session.user) {
    //     res.status(401).send("login required")
    // }
    // else {
        db.Hall.create({
            key: req.body.key ,
            password: req.body.password,
            hall_size: req.body.hall_size,
            theme_id: req.body.theme_id
        }).then(newHall => {
            res.json(newHall)
        }).catch(err) => {
            console.log(err);
            res.status(500).end();
        }
        //password(randomly selected)
        //possibly adding in hall configuration options later (no youtube? color themes? etc. could really shine here)
    //}
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
