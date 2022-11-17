const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.password)
    return result
}

userSchema.methods.generateToken = function (user) {
    const token = jwt.sign(
        { userID: this._id, userName: this.userName },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME,
        }
    )
    return token
}

module.exports = mongoose.model("User", userSchema)
