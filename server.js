const express = require('express');

const ProjectsRouter = require('./projects/projectsRouter.js');
const ActionsRouter = require('./actions/actionsRouter.js');

const server = express();

server.use(express.json());
server.use(logger);

server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hi there!</h2>`)
});

//custom middleware
function logger(req, res, next) {
  console.log(`Method: ${req.method}, url: ${req.url}, timestamp: [${new Date().toISOString()}]`);
  next();
};

module.exports = server;