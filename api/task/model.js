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
  return formattedTask
};

const addTask = async (task) => {
  return Promise.resolve('add task wired!');
};

module.exports = {
  getTasks,
  addTask,
};
