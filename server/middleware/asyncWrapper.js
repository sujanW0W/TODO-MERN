const asyncWrapper = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next)
        } catch (error) {
            // res.status(500).json({ msg: "Could not Fetch Data." })
            next(error)
        }
    }
}

module.exports = asyncWrapper
