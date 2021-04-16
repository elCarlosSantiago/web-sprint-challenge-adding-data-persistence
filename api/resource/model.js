const db = require('../../data/dbConfig.js');

const getResources = async () => {
  return db('resources');
};

const addResources = async (resource) => {
  const [resource_id] = await db('resources').insert(resource);
  const newResource = await db('resources').where('resource_id', resource_id).first();
  return newResource;
};

module.exports = {
  getResources,
  addResources,
};
