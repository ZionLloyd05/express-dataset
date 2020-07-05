const express = require('express');
const router = express.Router();
const eventService = require('../services/event');

// Routes related to event

// @route   GET /events/ping
// @desc    Test event route
// @access  Public
router.get('/ping', (req, res) => {
  res.json({ status: 'success', data: 'nil' });
});

// @route   GET /events
// @desc    Get all event route
// @access  Public
router.get('/', async (req, res) => {
  const result = await eventService.getAllEvents();
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

// @route   GET /events/actors/{actorId}
// @desc    Get all event route
// @access  Public
router.get('/actors/:id', async (req, res) => {
  const actorId = req.params.id;
  const result = await eventService.getEventsByActor(actorId);
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

// @route   POST /events
// @desc    Add event route
// @params  Event Object
// @access  Public
router.post('/', async (req, res) => {
  const newEvent = req.body;
  const result = await eventService.createEvent(newEvent);
  const { statusCode } = result;

  res.status(statusCode).json({});
});

module.exports = router;
