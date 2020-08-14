const express = require("express");
const router = express.Router();
// TODO: enable the below routes and their acompaniments on line 11 and 12 when using them. maybe fit room an hall routes together? maybe divide. depends on front handling.

// const hallRoutes = require("./hall")
// const userRoutes = require("./user")

router.get("/",(req,res)=>{
    res.send("jitsi witsi spider, clumb up the vidja wall");
})

// router.use("/api/halls",hallRoutes)
// router.use("/api/users",userRoutes)

module.exports = router