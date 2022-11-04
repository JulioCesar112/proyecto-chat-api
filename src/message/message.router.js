const router = require("express").Router()
const passport = require("passport")

const messageServices = require("./message.services")
require("../middlewares/auth.middleware")(passport)
const adminValidate = require("../middlewares/role.middleware")

router.route("/")
    .get(messageServices.getAllMessages)
    .post(
        passport.authenticate("jwt", {session: false}),
        messageServices.postMessage
    )
    
router.route("/:id")
    .delete(
        passport.authenticate("jwt", {session: false}),
        adminValidate,
        messageServices.deleteMessage
    )

module.exports = router