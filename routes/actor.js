var express = require('express');
var router = express.Router();
const actorService = require('../services/actor');

// Routes related to actor.

// @route   GET actors/ping
// @desc    Test actor route
// @access  Public
router.get('/ping', (req, res) => {
  res.json({ status: 'success', data: 'nil' });
});

// @route   GET /actors
// @desc    Update actor route
// @access  Public
router.put('/', async (req, res) => {
  const actorForUpdate = req.body;
  const result = await actorService.updateActor(actorService);
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

module.exports = router;
