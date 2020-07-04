var express = require('express');
var router = express.Router();

// Route related to delete events

router

  // @route   GET erase/ping
  // @desc    Test erase route
  // @access  Public
  .get('/ping', (req, res) => {
    res.json({ status: 'success', data: 'nil' });
  });

module.exports = router;
