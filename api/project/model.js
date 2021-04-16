const db = require('../../data/dbConfig.js');

const getProjects = async () => {
  return Promise.resolve('Get projects wired!');
};

const addProject = async (project) => {
  return Promise.resolve('add project wired!');
};

module.exports = {
  getProjects,
  addProject,
};
