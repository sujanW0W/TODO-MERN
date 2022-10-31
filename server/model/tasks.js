const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "This field can not be empty."],
        maxLength: [50, "Can not exceed than 50 characters."],
        trim: true
    },
    completion: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)