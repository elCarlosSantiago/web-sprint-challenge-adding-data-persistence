const db = require('../../data/dbConfig.js');

const getTasks = async () => {
  const taskCollection = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description');

  const formattedTask = taskCollection.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed == 1 ? true : false,
    };
  });
  return formattedTask;
};

const addTask = async (task) => {
  const [task_id] = await db('tasks').insert(task);
  const newTask = await db('tasks').where('task_id', task_id).first();

  const formattedTask = {
    ...newTask,
    task_completed: newTask.task_completed == 1 ? true : false,
  };
  return formattedTask;
};

module.exports = {
  getTasks,
  addTask,
};
