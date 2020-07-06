const express = require('express');

const router = express.Router();

const actorService = require('../services/actor');

// Routes related to actor.

// @route   GET /actors/ping
// @desc    Test actor route
// @access  Public
router.get('/ping', (req, res) => {
  res.json({ status: 'success', data: 'nil' });
});

// @route   GET /actors
// @desc    Get all actor route
// @access  Public
router.get('/', async (req, res) => {
  const result = await actorService.getAllActors();
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

// @route   GET /actors/streak
// @desc    Get all ordered actor route
// @access  Public
router.get('/streak', async (req, res) => {
  const result = await actorService.getAllActorOrderedByMaxStreak();
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

// @route   PUT /actors
// @desc    Update actor route
// @params  {object} Actor to Update
// @access  Public
router.put('/', async (req, res) => {
  const actorForUpdate = req.body;
  const result = await actorService.updateActor(actorForUpdate);
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

module.exports = router;
