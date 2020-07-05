const models = require('../models');
const IsEmpty = require('../helpers/isEmpty');
const { sequelize } = require('../models');
const db = require('../models');

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

const getAllActors = async () => {
  const actors = await db.sequelize.query(
    `SELECT actor.id, actor.login, actor.avatar_url, (SELECT COUNT(*) from events where (actor.id = events.actorId)) AS actor_events FROM actors AS actor LEFT OUTER JOIN events AS events ON actor.id = events.actorId GROUP BY events.actorId ORDER BY count(actor_events) DESC, events.created_at DESC, actor.login DESC;`,
    {
      model: models.actor,
      mapToModel: true,
    }
  );

  let formattedActors = [];

  actors.forEach((actor) => {
    const { id, login, avatar_url } = actor;
    formattedActors.push({
      id,
      login,
      avatar_url,
    });
  });

  return formattedActors;
};

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
