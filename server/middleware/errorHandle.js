const CustomAPIError = require("../errors/customError")

const errorHandle = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }

    res.status(500).json({ msg: "Internal Server Error" })
}

module.exports = errorHandle
