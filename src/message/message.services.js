const messagesControllers = require("./message.controller")

const getAllMessages = (req, res) => {
    const conversationId = req.params.id
    messagesControllers.getAllMessages(conversationId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postMessage = (req, res) => {
    const userId = req.user.id
    const  {message, conversationId} = req.body

    if(message && conversationId) {
        messagesControllers.postMessage({userId, conversationId, message})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: "Missing Data",
        })
    }
}

const deleteMessage = (req, res) => {
    const id = req.params.id
    messagesControllers.deleteMessage(id)
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
    getAllMessages,
    postMessage,
    deleteMessage
}
