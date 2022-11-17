const Task = require("../model/tasks")
const { StatusCodes } = require("http-status-codes")
const { UnAuthorized, BadRequest, NotFound } = require("../errors")

const getAllTasks = async (req, res) => {
    const { userID } = req.params

    const tasks = await Task.find({ userID })
    if (tasks.length === 0) throw new NotFound(`No tasks Found.`)
    res.status(StatusCodes.OK).json(tasks)
}

const getTask = async (req, res) => {
    const { taskID } = req.params

    const task = await Task.findById(taskID)

    if (!task) throw new NotFound(`Task with id: ${taskID} not Found.`)

    res.status(StatusCodes.OK).json(task)
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(StatusCodes.CREATED).json({ success: true, data: req.body })
}

const updateTask = async (req, res) => {
    const { id: taskID } = req.params

    const task = await Task.findByIdAndUpdate(taskID, req.body, {
        new: true,
    })

    if (!task) throw new NotFound(`Task with id: ${taskID} not Found.`)

    res.status(StatusCodes.OK).json({
        success: true,
        msg: "Update Successful.",
        task,
    })
}

const deleteTask = async (req, res) => {
    const { id: taskID } = req.params

    const task = await Task.findByIdAndDelete(taskID)
    if (!task) throw new NotFound(`Task with id: ${taskID} not Found.`)

    res.status(StatusCodes.OK).json({
        success: true,
        msg: "Delete Successful.",
    })
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}
