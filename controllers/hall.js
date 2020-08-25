const express = require("express");
const router = express.Router();
const db = require("../models");

//all routes below start with /api/halls

router.post("/create", (req, res) => {
  if (!req.session.user) {
    res.status(401).send("login required to create a hall");
  } else {
    db.Hall.create({
      name: req.body.name,
      password: req.body.password,
      description: req.body.description,
      hallSize: req.body.hallSize,

      UserId: req.session.user.id,
    })
      .then((newHall) => {
        console.log(newHall.id);

        for (ii = 0; ii < newHall.hallSize; ii++) {
          db.Room.create({
            name: `${newHall.name.split(" ").join("")}_${
              req.session.user.name
            }_${ii}_${Date.now()}`,
            password: newHall.password,
            HallId: parseInt(newHall.id),
          })
            .then((newRoom) => {
              console.log(newRoom.name);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).end();
            });
        }
        res.json(newHall);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
});

router.get("/allhalls", (req, res) => {
  if (!req.session.user) {
    res.status(401).send("login required to see user hall details");
  } else {
    db.Hall.findAll({
      where: { UserId: req.session.user.id },
      include: { model: db.Room, as: "Main" },
      order: [["updatedAt", "DESC"]],

    })
      .then((allhalls) => {
        res.json(allhalls);

      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  }
});

router.delete("/delete/:id", (req, res) => {
  db.Hall.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((hall) => {
      res.json("successfully deleted hall");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// // ROUTE TO LOAD A SPECIFIC HALL
router.get("/:id", (req, res) => {
  db.Hall.findOne({
    where: {
      id: req.params.id,
    },
    include: { model: db.Room, as: "Main" },
  })
    .then((hall) => {
      res.json(hall);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

module.exports = router;
