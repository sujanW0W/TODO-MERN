require("dotenv").config()
require("express-async-errors")
const cors = require("cors")

const express = require("express")
const app = express()

const userAuthorization = require("./middleware/auth")
const notFound = require("./middleware/notFound")
const errorHandle = require("./middleware/errorHandle")

// routers
const users = require("./routes/users")
const tasks = require("./routes/tasks")

//middlewares
app.use(cors())
app.use(express.json())

app.use("/api/v1/users", users)
app.use("/api/v1/tasks", userAuthorization, tasks)

app.use(notFound)
app.use(errorHandle)

const port = process.env.PORT || 5000

const connectDB = require("./DB/connect")
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}.....`)
        })
    } catch (error) {
        console.log("ERROR")
    }
}

start()
