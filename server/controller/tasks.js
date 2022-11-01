const Task = require("../model/tasks");

const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: req.body });
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate(taskID, req.body, {
        new: true,
    });

    if (!task)
        return res.status(404).json({ msg: `Not Found with id: ${taskID}` });

    res.status(200).json({ success: true, msg: "Update Successful." });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndDelete(taskID);
    if (!task)
        return res.status(404).json({ msg: `Not found with id: ${taskID}` });

    res.status(200).json({ success: true, msg: "Delete Successful." });
});

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
};
