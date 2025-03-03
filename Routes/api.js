const express = require('express');
const router = express.Router();
const TaskController = require('../app/Http/Controllers/TaskController');

router.route('/')
    .get(TaskController.index)
    .post(TaskController.store);

router.route('/:id')
    .get(TaskController.show)
    .put(TaskController.update)
    .delete(TaskController.destroy);

module.exports = router;