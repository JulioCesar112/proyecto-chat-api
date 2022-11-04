const router = require("express").Router()
const authServices = require("./auth.services")
const { registerUser } = require("../users/user.services")

router.post("/register", registerUser)

router.post("/login", authServices.login)

module.exports = router