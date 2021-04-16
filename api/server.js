const express = require('express');
const helmet = require('helmet');
const ProjectRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
// const TaskRouter = require('./task/router')

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
// server.use('/api/tasks', TaskRouter)

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.use('*', (req, res) => {
  res.status(404).json('Resource not found');
});

module.exports = server;
