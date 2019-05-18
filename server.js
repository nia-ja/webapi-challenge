const express = require('express');

const ProjectsRouter = require('./projects/projectsRouter.js');
const ActionsRouter = require('./actions/actionsRouter.js');

const server = express();

server.use(express.json());
server.use(logger);

server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's rock!</h2>`)
});

//custom middleware
// logger - middleware that logs into console info about every reques performed by user (output looks like: "Method: GET, url: /api/projects, timestamp: [2019-05-18T16:44:56.305Z]")
function logger(req, res, next) {
  console.log(`Method: ${req.method}, url: ${req.url}, timestamp: [${new Date().toISOString()}]`);
  next();
};

module.exports = server;