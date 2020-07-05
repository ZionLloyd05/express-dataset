const models = require('../models');
const actorController = require('./actor');
const repoController = require('./repo');
const IsEmpty = require('../helpers/isEmpty');

const getAllEvents = async () => {
  const events = await models.event.findAll({
    include: [
      { model: models.actor, as: 'actor' },
      { model: models.repo, as: 'repo' },
    ],
    order: [['id', 'ASC']],
    attributes: {
      exclude: ['actorId', 'repoId'],
    },
  });
  return events;
};

const addEvent = async (eventForCreate) => {
  try {
    // extract actor and repo data
    const { actor, repo } = eventForCreate;
    const { id, type, created_at } = eventForCreate;

    const actorId = actor.id;
    const repoId = repo.id;

    console.log(created_at);

    // setup event model
    let newEvent = {
      id,
      type,
      actorId,
      repoId,
      created_at,
    };

    // setup a transaction
    const result = await models.sequelize.transaction(async (t) => {
      // create actor
      await actorController.addActor(actor, t);

      // create repo
      await repoController.addRepo(repo, t);

      // create event
      const event = await models.event.create(newEvent, { transaction: t });
      return event;
    });
  } catch (error) {
    console.error(error);
  }
};

const getEventsByActor = async (actorId) => {
  const events = await models.event.findAll({
    where: { actorId },
    include: [
      { model: models.actor, as: 'actor' },
      { model: models.repo, as: 'repo' },
    ],
    order: [['id', 'ASC']],
    attributes: {
      exclude: ['actorId', 'repoId'],
    },
  });

  return events;
};

const getEventById = async (eventId) => {
  const event = await models.event.findOne({
    where: { id: eventId },
  });

  return event;
};

const eraseAllEvents = async () => {
  const deleted = await models.event.destroy({ truncate: true });
  return null;
};

module.exports = {
  getAllEvents,
  getEventById,
  addEvent,
  getEventsByActor,
  eraseAllEvents,
};
