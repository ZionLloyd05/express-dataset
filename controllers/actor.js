const models = require('../models');
const IsEmpty = require('../helpers/isEmpty');
const { sequelize } = require('../models');

const db = require('../models');

const moment = require('moment');

const _ = require('lodash');

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

  let formattedActors = mapToActorModel(actors);

  return formattedActors;
};

const updateActor = async (actorForUpdate) => {
  const [updated] = await models.actor.update(actorForUpdate, {
    where: { id: actorForUpdate.id },
  });

  return updated;
};

const getAllActorOrderedByMaxStreak = async () => {
  const actors = await db.sequelize.query(
    `SELECT id, login, avatar_url FROM (SELECT MAX(DATE(e.created_at)) AS l_day, COUNT(DISTINCT DATE(e.created_at)) AS max_streak, a.* FROM actors as a JOIN events AS e ON a.id = e.actorId GROUP BY login) ORDER BY max_streak DESC, l_day DESC, login`,
    {
      model: models.actor,
      mapToModel: true,
    }
  );

  let formattedActors = mapToActorModel(actors);

  return formattedActors;
};

const eraseAllActors = async () => {
  const deleted = await models.actor.destroy({ truncate: true });
  return null;
};

// ---Helper Methods----------------------------
const mapToActorModel = (obj) => {
  let formattedActors = [];

  if (IsEmpty(obj)) return;

  obj.forEach((actor) => {
    const { id, login, avatar_url } = actor;
    formattedActors.push({
      id,
      login,
      avatar_url,
    });
  });

  return formattedActors;
};
// ----------------------------------------------

module.exports = {
  updateActor,
  getAllActors,
  addActor,
  getActorById,
  eraseAllActors,
  getAllActorOrderedByMaxStreak,
};
