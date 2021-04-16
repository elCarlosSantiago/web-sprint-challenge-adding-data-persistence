const db = require('../../data/dbConfig.js');

const getResources = async () => {
  return db('resources');
};

const addResources = async () => {};

module.exports = {
  getResources,
  addResources,
};
