const db = require('../../data/dbConfig.js');

const getTasks = async () => {
  return db('tasks');
};

const addTask = async (task) => {
  return Promise.resolve('add task wired!');
};

module.exports = {
  getTasks,
  addTask,
};
