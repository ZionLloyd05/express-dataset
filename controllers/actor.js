const models = require('../models');
const IsEmpty = require('../helpers/isEmpty');

const addActor = async (actorForCreate, t) => {
  const actorInDb = await getActorById(actorForCreate.id);

  if (!IsEmpty(actorInDb)) return;

  const actor = await models.actor.create(actorForCreate, { transaction: t });
  return actor;
};

const getActorById = async (actorId) => {
  const actor = await models.actor.findOne({
    where: { id: actorId },
  });

  return actor;
};

const getAllActors = () => {};

const updateActor = async (actorForUpdate) => {
  const [updated] = await models.actor.update(actorForUpdate, {
    where: { id: actorForUpdate.id },
  });

  return updated;
};

const getStreak = () => {};

module.exports = {
  updateActor,
  getAllActors,
  getStreak,
  addActor,
  getActorById,
};
