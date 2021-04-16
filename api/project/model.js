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
  const [project_id] = await db('projects').insert(project);
  const newProject = await db('projects').where('project_id', project_id).first();

  const formattedNewProj = {
    ...newProject,
    project_completed: newProject.project_completed == 1 ? true : false,
  };
  return formattedNewProj;
};

module.exports = {
  getProjects,
  addProject,
};
