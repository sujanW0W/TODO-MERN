const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field can not be empty."],
        maxLength: [50, "Can not exceed than 50 characters."],
        trim: true,
    },
    userID: {
        type: String,
        required: [true, "User ID not provided."],
    },
    completion: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Task", TaskSchema)
