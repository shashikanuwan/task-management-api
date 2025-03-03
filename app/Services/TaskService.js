const Task = require('../Models/Task');

class TaskService {
    async store(data) {
        const task = new Task(data);
        return await task.save();
    }

    async all() {
        return await Task.find();
    }

    async find(id) {
        return await Task.findById(id);
    }

    async update(id, data) {
        return await Task.findByIdAndUpdate(id, data, { new: true });
    }

    async destroy(id) {
        return await Task.findByIdAndDelete(id);
    }
}

module.exports = new TaskService();