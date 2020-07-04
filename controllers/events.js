const models = require('../database/models');
const IsEmpty = require('../helpers/isEmpty');

const getAllEvents = async () => {
  console.log('got to controller');
  const events = await models.event.findAll({
    order: [['id', 'ASC']],
  });
  console.log(events);
  return events;
};

const addEvent = async (newEvent) => {
  const event = await models.event.create(newEvent);
  return event;
};

const getByActor = async (actorId) => {
  const events = await models.event.findAll({
    where: { actorId },
  });

  return events;
};

const getEventById = async (eventId) => {
  const event = await models.event.findOne({
    where: { id: eventId },
  });

  return event;
};

const eraseEvents = async () => {
  const deleted = await models.event.destroy({ truncate: true });
  return null;
};

module.exports = {
  getAllEvents,
  getEventById,
  addEvent,
  getByActor,
  eraseEvents,
};
