const router = require("express").Router()
const passport = require("passport")

const conversationServices = require("./conversations.services")
require("../middlewares/auth.middleware")(passport)
const adminValidate = require("../middlewares/role.middleware")

router.route("/")
    .get(conversationServices.getAllConversations)
    .post(
        passport.authenticate("jwt", {session: false}),
        conversationServices.postConversation)

router.route("/:id")
    .get(conversationServices.getConversationById)
    .patch(
        passport.authenticate("jwt", {session: false}),
        adminValidate,
        conversationServices.patchConversation
    )
    .delete(
        passport.authenticate("jwt", {session: false}),
        adminValidate,
        conversationServices.deleteConversation
    )

router.get("/:id", conversationServices.getConversationById)

module.exports = router