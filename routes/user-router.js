const express = require("express");
const {signUp, signIn} = require("../controllers/user-controller");
const router = express.Router();

router.use(express.json())

router.post("/signup", signUp)
router.get("/signin", signIn)






module.exports = router