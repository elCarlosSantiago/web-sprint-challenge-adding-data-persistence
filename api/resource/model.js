const db = require('../../data/dbConfig.js');

const getResources = async () => {
  return Promise.resolve('getResources wired!')
}

const addResources = async () => {
  return Promise.resolve('addResources wired!')
}

module.exports = {
  getResources,
  addResources
}