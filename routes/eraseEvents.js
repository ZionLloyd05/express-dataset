const express = require('express');

const router = express.Router();

const eventService = require('../services/event');

// Route related to delete events

// @route   GET /erase/ping
// @desc    Test erase route
// @access  Public
router.get('/ping', (req, res) => {
  res.json({ status: 'success', data: 'nil' });
});

// @route       DELETE /erase
// @desc        Erase all event route
// @access      Public
router.delete('/', async (req, res) => {
  const result = await eventService.eraseAllEvents();
  const { statusCode } = result;

  res.status(statusCode).json({});
});

module.exports = router;
