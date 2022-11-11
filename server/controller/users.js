const User = require("../model/user")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            success: true,
            msg: `A user with username, '${req.body.userName}' is created successfully.`,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Something went wrong. Error: ${error.message}`,
        })
    }
}

const login = async (req, res) => {
    const { userName, password } = req.body
    try {
        const [user] = await User.find({ userName }).select("userName password")
        const userID = user._id.toString()

        const token = jwt.sign(
            { userID, userName: user.userName },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        )

        if (password === user.password) {
            const { _id: userID } = user
            return res.status(200).json({
                success: true,
                msg: `Login Successful. Welcome ${userName}`,
                token,
            })
        }

        res.status(401).json({
            success: false,
            msg: `Login Unsuccessful. Password for ${userName} is incorrect.`,
        })
    } catch (error) {
        res.status(404).json({
            msg: `User with username, ${userName} Not Found.`,
        })
    }
}

module.exports = { register, login }
