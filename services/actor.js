const models = require('../models');
const actorController = require('./actor');
const IsEmpty = require('../helpers/isEmpty');

const updateActor = async (actorForUpdate) => {
  try {
    const actorId = actorForUpdate.id;

    // fetch actor from db
    const actorInDb = await actorController.getActorById(actorId);

    if (IsEmpty(actorInDb)) {
      const statusCode = 404;
      return {
        toReturn: { body: {} },
        statusCode,
      };
    }

    // compare to see that no other field is updated
    if (actorInDb.login !== actorForUpdate.login) {
      const statusCode = 400;
      return {
        toReturn: { body: {} },
        statusCode,
      };
    }

    // update actor
    await actorController.updateActor(actorForUpdate);

    const statusCode = 200;
    return {
      toReturn: { body: {} },
      statusCode,
    };
  } catch (error) {}
};

module.exports = {
  updateActor,
};
