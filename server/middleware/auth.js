const jwt = require("jsonwebtoken")

const userAuthorization = (req, res, next) => {
    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Authorization Failed." })
    }

    try {
        const token = authToken.split(" ")[1]
        const tokenVerify = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        res.status(401).json({ msg: "Authorization Verification Failed." })
    }
}

module.exports = userAuthorization
