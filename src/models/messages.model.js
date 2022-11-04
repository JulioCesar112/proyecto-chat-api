const db = require("../utils/database")

const Users = require("./users.models")
const Conversations = require("./conversations.model")

const { DataTypes } = require("sequelize")

const Messages = db.define("message", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id",
        references: {
            key: "id",
            model: Users
        }
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "conversation_id",
        references: {
            key: "id",
            model: Conversations
        }
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = Messages