const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const router = express.Router();

// GET endpoint for /api/projects. Takes the route -> returns an array of objects
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
      } catch (error) {
        res.status(500).json({
          message: 'Error retrieving the projects',
        });
      }
});

// GET endpoint for /api/projects/:id/actions. Takes the route including id of the project -> returns an array of actions for this project or empty array if there's no actions for the project
router.get('/:id/actions', async (req, res) => {
    try {
        const actions = await Projects.getProjectActions(req.params.id);
        res.status(200).json(actions);
      } catch (error) {
        res.status(500).json({
          message: 'Error retrieving the actions',
        });
      }
});

// POST endpoint for /api/projects. Takes the route and new project object -> returns newerly created object
router.post('/', async (req, res) => {
    try {
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
      } catch (error) {
        res.status(500).json({
          message: 'Error adding the project',
        });
      }
});

// DELETE endpoint for /api/projects/:id. Takes route with id of the project user want to delete in this route -> returns count === number of records have been deleted. For better user expiriens we're returning the message, that project has been deleted
router.delete('/:id', async (req, res) => {
    try {
        const count = await Projects.remove(req.params.id);
        if (count > 0) {
          res.status(200).json({ message: 'The project has been deleted' });
        } else {
          res.status(404).json({ message: 'The project could not be found' });
        }
      } catch (error) {
        res.status(500).json({
          message: 'Error removing the project',
        });
      }
});

// PUT endpoint for /api/projects/:id. Takes the route and project's id -> returns eddited object
router.put('/:id', async (req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);
        if (project) {
          res.status(200).json(project);
        } else {
          res.status(404).json({ message: 'The project could not be found' });
        }
      } catch (error) {
        res.status(500).json({
          message: 'Error updating the project',
        });
      }
});

module.exports = router;