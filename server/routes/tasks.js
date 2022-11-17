const express = require("express")
const router = express.Router()

const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
} = require("../controller/tasks")

router.get("/:userID", getAllTasks)

router.get("/edit/:taskID", getTask)

router.post("/", createTask)

router.patch("/:id", updateTask)

router.delete("/:id", deleteTask)

module.exports = router
