const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const session = require("express-session");
//all routes here will start with /api/users

// router.get("/:id", (req,res)=>{
//     //db.User.findOne({ADDWHEREHERE}).then(foundUser =>{DOSOMETHINGWITHIT,RESJSON}).catch(err=>{console.log(err);res.status(500).end()})
// })

//for creating a new user
router.post("/signup", (req, res) => {
  db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    description: req.body.description,
  })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
  // }
});

//This route finds a single user by their email to log them in
router.post("/login", (req, res) => {
  db.User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user) {
        res.status(401).send("wrong username or password");
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = {
            name: user.name,
            email: user.email,
            id: user.id,
          };

          res.send({ user: req.session.user });
        } else {
          res.status(401).send("wrong username or password");
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("logout complete!");
});

router.get("/readsessions", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.json({});
  }
});

module.exports = router;
