const db = require('../../data/dbConfig.js');

const getProjects = async () => {
  const projectCollection = await db('projects');

  const formattedProj = projectCollection.map((proj) => {
    return {
      ...proj,
      project_completed: proj.project_completed == 1 ? true : false,
    };
  });
  return formattedProj;
};

const addProject = async (project) => {
  return Promise.resolve('add project wired!');
};

module.exports = {
  getProjects,
  addProject,
};
