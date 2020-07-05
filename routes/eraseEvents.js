var express = require('express');
var router = express.Router();
const eventService = require('../services/event');

// Route related to delete events

// @route   GET erase/ping
// @desc    Test erase route
// @access  Public
router.get('/ping', (req, res) => {
  res.json({ status: 'success', data: 'nil' });
});

// @route       DELETE /erase
// @desc        Erase all event route
// @access      Public
// @assumptions Since there was no specifications as regards
//              removing the repo model associated with the event object,
//              it's therefore assumed that we want the repo object kept
//              and not erased along side with event.
router.delete('/', async (req, res) => {
  const result = await eventService.eraseAllEvents();
  const { statusCode } = result;

  res.status(statusCode).json({});
});

module.exports = router;
