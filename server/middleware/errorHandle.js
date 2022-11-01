const errorHandle = (err, req, res, next) => {
    res.status(500).json({ msg: "Internal Server Error." })
}

module.exports = errorHandle
