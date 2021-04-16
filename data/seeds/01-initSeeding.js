exports.seed = async function (knex) {
  await knex('projects').insert([
    {
      project_name: 'Build a Front End',
      project_description: 'A barebones overview of a front end project.',
      project_completed: false,
    },
    {
      project_name: 'Build a Back End',
      project_description: 'A short overview of a backend project.',
      project_completed: false,
    },
  ]);
  await knex('resources').insert([
    { resource_name: 'React', resource_description: 'A modular frontend library.' },
    {
      resource_name: 'SASS',
      resource_description: 'A CSS preprocessor for sweet syntax and stuff.',
    },
    { resource_name: 'ESLINT', resource_description: 'Your best friend' },
    { resource_name: 'Redux', resource_description: 'Robust state management system' },
    {
      resource_name: 'Node.js',
      resource_description:
        'A JavaScript runtime environment, usually used for backend tasks and other sweet stuff like scripting.',
    },
    {
      resource_name: 'Express',
      resource_description:
        'A lightweight webserver framework that runs on top of Node.js',
    },
    {
      resource_name: 'Postman',
      resource_description:
        'A powerful desktop application that acts as a client for API testing.',
    },
  ]);

  await knex('tasks').insert([
    {
      task_description: 'Create-React-App',
      task_notes: 'Add a period after command to run in present directory',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Program UI',
      task_notes: 'Build the entire front end ui',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Style UI',
      task_notes: 'Style the the UI',
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: 'Set up server',
      task_notes: 'Listen on index.js, use express.',
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: 'Build out server',
      task_notes: 'Connect middleware, setup routers, models.',
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: 'Test server',
      task_notes: 'Use postman to test endpoints',
      task_completed: false,
      project_id: 2,
    },
  ]);

  await knex('project_resources').insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
    { project_id: 1, resource_id: 4 },
    { project_id: 1, resource_id: 7 },
    { project_id: 2, resource_id: 3 },
    { project_id: 2, resource_id: 5 },
    { project_id: 2, resource_id: 6 },
    { project_id: 2, resource_id: 7 },
  ]);
};
