var express = require('express');
var router = express.Router();

// Routes related to actor.

router

  // @route   GET actors/ping
  // @desc    Test actor route
  // @access  Public
  .get('/ping', (req, res) => {
    res.json({ status: 'success', data: 'nil' });
  });

module.exports = router;
