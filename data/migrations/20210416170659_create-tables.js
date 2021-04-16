exports.up = function (knex) {
  return knex.schema

    .createTable('projects', (tbl) => {
      tbl.increments('project_id');
    })
    .createTable('resources', (tbl) => {
      tbl.increments('resource_id');
    })
    .createTable('tasks', (tbl) => {
      tbl.increments('task_id');
    })
    .createTable('project_resources', (tbl) => {
      tbl.increments('project_resources_id');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
