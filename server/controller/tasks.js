const Task = require("../model/tasks")

const getAllTasks = async (req, res) => {
    const { userID } = req.params
    try {
        const tasks = await Task.find({ userID })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: "Could not Fetch Data." })
    }
}

const getTask = async (req, res) => {
    const { taskID } = req.params
    try {
        const task = await Task.findById(taskID)

        if (!task)
            return res
                .status(404)
                .json({ msg: `task with id: ${taskID} not found.` })

        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: "Could not fetch Data." })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ success: true, data: req.body })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async (req, res) => {
    const { id: taskID } = req.params
    try {
        const task = await Task.findByIdAndUpdate(taskID, req.body, {
            new: true,
        })

        if (!task)
            return res.status(404).json({ msg: `Not Found with id: ${taskID}` })

        res.status(200).json({ success: true, msg: "Update Successful.", task })
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}

const deleteTask = async (req, res) => {
    const { id: taskID } = req.params
    try {
        const task = await Task.findByIdAndDelete(taskID)
        if (!task)
            return res.status(404).json({ msg: `Not found with id: ${taskID}` })

        res.status(200).json({ success: true, msg: "Delete Successful." })
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error." })
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}
