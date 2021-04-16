const db = require('../../data/dbConfig.js');

const getTasks = async () => {
  return Promise.resolve('getTasks wired');
};

const addTask = async (task) => {
  return Promise.resolve('add task wired!');
};

module.exports = {
  getTasks,
  addTask,
};
