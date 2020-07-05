const models = require('../models');
const IsEmpty = require('../helpers/isEmpty');

const addActor = async (newActor, t) => {
  const actorInDb = await getActorById(newActor.id);

  if (!IsEmpty(actorInDb)) return;

  const actor = await models.actor.create(newActor, { transaction: t });
  return actor;
};

const getActorById = async (actorId) => {
  const actor = await models.actor.findOne({
    where: { id: actorId },
  });

  return actor;
};

const getAllActors = () => {};

const updateActor = () => {};

const getStreak = () => {};

module.exports = {
  updateActor,
  getAllActors,
  getStreak,
  addActor,
  getActorById,
};
