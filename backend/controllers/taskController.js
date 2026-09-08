const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({
                message: "Title Required"
            });
        }
        const task = await Task.create({ title, description });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.messge
        });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.messge
        });
    }
};

const singleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ message: "Invalid ID" });
        }
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.messge
        });
    }
};

const editTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const task = await Task.findByIdAndUpdate(
            id,
            { title, description },
            { runValidators: true, new: true }
        );
        if (!task) {
            return res.status(404).json({ message: "Task Not Found" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.messge
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({
                message: "Task Not Found"
            });
        }
        res.status(200).json({
            message: "Task Deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: error.messge
        });
    }
};

module.exports = {createTask, getTasks, singleTask, editTask, deleteTask};