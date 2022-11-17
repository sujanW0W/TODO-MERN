const CustomAPIError = require("./customError")
const { StatusCodes } = require("http-status-codes")

class UnAuthorized extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthorized
