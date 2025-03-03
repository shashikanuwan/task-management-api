const express = require('express');
const router = express.Router();
const TaskController = require('../app/Http/Controllers/TaskController');

router.route('/tasks')
    .get(TaskController.index)
    .post(TaskController.store);

router.route('/tasks/:id')
    .get(TaskController.show)
    .put(TaskController.update)
    .delete(TaskController.destroy);

module.exports = router;