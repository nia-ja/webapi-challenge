const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();

// GET endpoint for /api/actions. Takes the route -> returns an array of objects
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
      } catch (error) {
        res.status(500).json({
          message: 'Error retrieving the actions',
        });
      }
});

// POST endpoint for /api/actions. Takes the route and new action object -> returns newerly created object
router.post('/', validateAction, async (req, res) => {
    try {
        const action = await Actions.insert(req.body);
        res.status(201).json(action);
      } catch (error) {
        res.status(500).json({
          message: 'Error adding the action',
        });
      }
});

// DELETE endpoint for /api/actions/:id. Takes route with id of the actin user want to delete in this route -> returns count === number of records have been deleted. For better user expiriens we're returning the message, that action has been deleted
router.delete('/:id', async (req, res) => {
    try {
        const count = await Actions.remove(req.params.id);
        if (count > 0) {
          res.status(200).json({ message: 'The action has been deleted' });
        } else {
          res.status(404).json({ message: 'The action could not be found' });
        }
      } catch (error) {
        res.status(500).json({
          message: 'Error removing the action',
        });
      }
});
// PUT endpoint for /api/actions/:id. Takes the route and project's id -> returns eddited object
router.put('/:id', validateAction, async (req, res) => {
    try {
        const action = await Actions.update(req.params.id, req.body);
        if (action) {
          res.status(200).json(action);
        } else {
          res.status(404).json({ message: 'The action could not be found' });
        }
      } catch (error) {
        res.status(500).json({
          message: 'Error updating the action',
        });
      }
});

// custom middleware
function validateAction(req, res, next) {
    if(req.body && Object.keys(req.body).length) {
        if(req.body.project_id && req.body.description !== "" && req.body.notes !== "") {
            next();
        } else {
            res.status(400).json({ message: "missing required field(s)" });
        }
    } else {
        res.status(400).json({ message: "missing action data" });
    }
};

module.exports = router;