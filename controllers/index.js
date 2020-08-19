const express = require("express");
const router = express.Router();

const hallRoutes = require("./hall")
const userRoutes = require("./user")
const roomRoutes = require("./room")

router.get("/",(req,res)=>{
    res.send("jitsi witsi spider, clumb up the vidja wall");
})

router.use("/api/halls",hallRoutes)
router.use("/api/users",userRoutes)
router.use("/api/rooms",roomRoutes)

module.exports = router