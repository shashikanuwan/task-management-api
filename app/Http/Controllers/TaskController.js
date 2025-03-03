const TaskService = require('../../Services/TaskService');

class TaskController {
    constructor() {
        this.taskService = TaskService;
        // Bind all methods to preserve 'this' context
        this.store = this.store.bind(this);
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    async store(req, res, next) {
        try {
            const task = await this.taskService.store(req.body);
            return res.status(201).json({
                message: 'Task created successfully',
                data: task
            });
        } catch (error) {
            next(error);
        }
    }

    async index(req, res, next) {
        try {
            const tasks = await this.taskService.all();
            return res.json({
                message: 'Tasks retrieved successfully',
                data: tasks
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        try {
            const task = await this.taskService.find(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.json({
                message: 'Task retrieved successfully',
                data: task
            });
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const task = await this.taskService.update(req.params.id, req.body);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.json({
                message: 'Task updated successfully',
                data: task
            });
        } catch (error) {
            next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            const task = await this.taskService.destroy(req.params.id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(200).json({
                message: 'Task deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TaskController();