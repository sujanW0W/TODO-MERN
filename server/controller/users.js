const User = require("../model/user")
const { StatusCodes } = require("http-status-codes")
const { UnAuthorized, BadRequest, NotFound } = require("../errors")

const register = async (req, res) => {
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({
        success: true,
        msg: `A user with username, '${req.body.userName}' is created successfully.`,
    })
}

const login = async (req, res) => {
    const { userName, password } = req.body

    if (!userName || !password)
        throw new BadRequest("Please provide Valid Credentials.")

    const user = await User.findOne({ userName }).select("userName password")

    if (!user) throw new NotFound(`${userName} not Found.`)

    const isMatch = await user.checkPassword(password, user.password)
    if (!isMatch) throw new UnAuthorized("Invalid Credentials.")

    const token = user.generateToken()
    res.status(StatusCodes.OK).json({ userName, token })
}

module.exports = { register, login }
