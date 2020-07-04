var express = require('express');
var router = express.Router();

// Routes related to event

router

  // @route   GET /events/ping
  // @desc    Test event route
  // @access  Public
  .get('/ping', (req, res) => {
    res.json({ status: 'success', data: 'nil' });
  });

module.exports = router;
