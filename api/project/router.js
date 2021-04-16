const router = require('express').Router();
const Projects = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const projectCollection = await Projects.getProjects();
    res.json(projectCollection);
  } catch (err) {
    next(err);
  }
});
router.post('/', async (req, res, next) => {
  const project = req.body;
  try {
    const newProject = await Projects.addProject(project);
    res.json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;