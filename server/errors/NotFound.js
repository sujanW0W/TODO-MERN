const CustomAPIError = require("./customError")
const { StatusCodes } = require("http-status-codes")

class NotFound extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFound
