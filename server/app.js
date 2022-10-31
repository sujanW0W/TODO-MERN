const express = require('express')
const app = express()

app.use(express.json())

require('dotenv').config()

const tasks = require('./routes/tasks')
const notFound = require('./middleware/notFound')

const cors = require('./CORS/corsSetting')
app.use(cors)

app.use('/api/v1/tasks', tasks)

//Not Found
app.use(notFound)

const port = process.env.PORT || 5000


const connectDB = require('./DB/connect')
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen( port, () => {
            console.log(`Server is running on port ${port}.....`);
        })

    } catch (error) {
        console.log("ERROR");
    }
}

start()