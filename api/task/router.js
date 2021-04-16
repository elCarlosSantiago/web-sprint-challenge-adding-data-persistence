const router = require('express').Router();
const Tasks = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const taskCollection = await Tasks.getTasks();
    res.json(taskCollection);
  } catch (err) {
    next();
  }
});

router.post('/', async (req, res, next) => {
  const task = req.body;
  try {
    const newTask = await Tasks.addTask(task);
    res.json(newTask);
  } catch (err) {
    next();
  }
});

module.exports = router;
