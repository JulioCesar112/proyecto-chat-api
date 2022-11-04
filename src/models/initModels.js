const Users = require("./users.models")
const Conversations = require("./conversations.model")
const Participants = require("./participants.model")
const Messages = require("./messages.model")


const initModels = () => {

    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)
}

module.exports = initModels