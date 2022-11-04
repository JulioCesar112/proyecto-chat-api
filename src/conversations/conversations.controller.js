const Conversations = require("../models/conversations.model")

const uuid = require("uuid")

const getAllConversations = async () => {
    const data = await Conversations.findAll()
    return data
}

const getConversationById = async (id) => {
    const data = await Conversations.findOne({
        where: {
            id
        }
    })
    return data
}

const createConversation = async (data) => {
    const response = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId,
    })
    return response
}

const updateConversation = async (id, data) => {
    const result = await Conversations.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id
        }
})
    return data
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation
}