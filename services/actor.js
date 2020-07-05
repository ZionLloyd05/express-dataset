const actorController = require('../controllers/actor');
const IsEmpty = require('../helpers/isEmpty');

const getAllActors = async () => {
  try {
    const actors = await actorController.getAllActors();
    const statusCode = 200;

    const toReturn = actors;
    return {
      toReturn,
      statusCode,
    };
  } catch (error) {
    console.error(error);
    const statusCode = 500;
    return {
      statusCode,
    };
  }
};

const updateActor = async (actorForUpdate) => {
  try {
    const actorId = actorForUpdate.id;

    // fetch actor from db
    const actorInDb = await actorController.getActorById(actorId);

    if (IsEmpty(actorInDb)) {
      const statusCode = 404;

      const toReturn = {};
      return {
        toReturn,
        statusCode,
      };
    }

    // compare to see that no other field is updated
    if (actorInDb.login !== actorForUpdate.login) {
      const statusCode = 400;
      const toReturn = {};

      return {
        toReturn,
        statusCode,
      };
    }

    // update actor
    await actorController.updateActor(actorForUpdate);

    const statusCode = 200;

    const toReturn = {};
    return {
      toReturn,
      statusCode,
    };
  } catch (error) {}
};

module.exports = {
  updateActor,
  getAllActors,
};
