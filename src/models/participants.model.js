const db = require("../utils/database")

const { DataTypes } = require("sequelize")

const Participants = db.define("participants", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "conversation_id"
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id"
    }
})

module.exports = Participants