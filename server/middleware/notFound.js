const notFound = (req, res, next) => {
    res.status(404).json({msg: "Not Found."})
    next()
}

module.exports = notFound;