const express = require('express');

const router = express.Router();

const actorRouter = require('./actor');

const eventRouter = require('./events');

const eraseEventRouter = require('./eraseEvents');

router.get('/', (req, res) => {
  res.send({ data: 'Git Event Tracker App' });
});
router.use('/actors', actorRouter);
router.use('/events', eventRouter);
router.use('/erase', eraseEventRouter);

module.exports = router;
