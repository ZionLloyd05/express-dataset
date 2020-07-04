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

router.get('/', async (req, res) => {
  try {
    console.log('got here');
    const result = await eventService.getAllEvents();
    console.log(result);
    const { statusCode, toReturn } = result;

    res.status(statusCode).json(toReturn);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  const newEvent = req.body;
  const result = await eventService.createEvent(newEvent);
  const { statusCode, toReturn } = result;

  res.status(statusCode).json(toReturn);
});

module.exports = router;
