const express = require('express');
const helmet = require('helmet')
// const ProjectRouter = require('./project/router')
// const ResourceRouter = require('./resource/router')
// const TaskRouter = require('./task/router')

const server = express();

server.use(express.json())
server.use(helmet())
// server.use('/api/projects', ProjectRouter)
// server.use('/api/resources', ResourceRouter)
// server.use('/api/tasks', TaskRouter)

server.use('*', (req, res) => {
  res.status(404).json('Resource not found')
})

module.exports = server;

