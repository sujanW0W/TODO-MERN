const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/customError")

const userAuthorization = (req, res, next) => {
    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith("Bearer ")) {
        throw new CustomAPIError("Authorization Failed.", 401)
    }

    try {
        const token = authToken.split(" ")[1]
        const tokenVerify = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        throw new CustomAPIError("Authorization Verification Failed.", 401)
    }
}

module.exports = userAuthorization
