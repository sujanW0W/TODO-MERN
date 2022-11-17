const jwt = require("jsonwebtoken")
const { UnAuthorized } = require("../errors/")
const { StatusCodes } = require("http-status-codes")

const userAuthorization = (req, res, next) => {
    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith("Bearer ")) {
        throw new UnAuthorized("Authorization Failed.")
    }

    const token = authToken.split(" ")[1]
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userID: payload.userID, userName: payload.userName }

    next()
}

module.exports = userAuthorization
