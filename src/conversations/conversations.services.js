const conversationControllers = require("./conversations.controller")

const getAllConversations = (req, res) => {
    conversationControllers.getAllConversations()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const getConversationById = (req, res) => {
    const id = req.params.id

    conversationControllers.getConversationById(id)
        .then(data => {
            if(data) {
            res.status(200).json(data)
            } else {
                res.status(404).json({mmessage: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postConversation = (req, res) => {
    const userId = req.user.id
    const {title, imageUrl} = req.body

    if (title && imageUrl) {
        conversationControllers.createConversation({title, imageUrl, userId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
        } else {
            res.status(400).json({
                message: "Missing data",
                fields: {
                    title: "string",
                    imageUrl: "string"
                }
            })
        }
}

const patchConversation = (req, res) => {
    const id = req.params.id
    const {title, imageUrl} = req.body

    conversationControllers.updateConversation(id, {title, imageUrl})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Conversation with ID: ${id}, edited successfully`})
            } else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
                res.status(400).json({message: err.message})
        })
}

const deleteConversation = (req, res) => {
    const id = req.params.id
    conversationControllers.deleteConversation(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: "Invalid ID"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllConversations,
    getConversationById,
    postConversation,
    patchConversation,
    deleteConversation
}