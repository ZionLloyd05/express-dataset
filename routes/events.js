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
  try {
    const result = await eventService.getAllEvents();
    const { statusCode, toReturn } = result;

    res.status(statusCode).json(toReturn);
  } catch (error) {
    console.error(error);
  }
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
