const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Must Provide Username"],
        maxLength: [15, "Username should not exceed than 15 characters."],
        trim: true,
        unique: [true, "{VALUE} already exists. Try another username."],
    },
    password: {
        type: String,
        required: [true, "Must Provide Password."],
        minLength: [
            6,
            "Password must be greater than 5 characters, got {VALUE}",
        ],
    },
})

module.exports = mongoose.model("User", userSchema)
