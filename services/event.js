const eventController = require('../controllers/event');
const actorController = require('../controllers/actor');
const IsEmpty = require('../helpers/isEmpty');

const createEvent = async (eventToCreate) => {
  try {
    //   Check if event already exist
    const eventInDb = await eventController.getEventById(eventToCreate.id);

    if (!IsEmpty(eventInDb)) {
      const statusCode = 400;
      return {
        statusCode,
      };
    }

    // create event if it doesn't exist
    const event = await eventController.addEvent(eventToCreate);

    const statusCode = 201;
    return {
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

const getAllEvents = async () => {
  try {
    const events = await eventController.getAllEvents();
    const statusCode = 200;
    return {
      toReturn: { body: events },
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

const getEventsByActor = async (actorId) => {
  try {
    const actor = await actorController.getActorById(actorId);

    if (IsEmpty(actor)) {
      const statusCode = 404;
      return {
        toReturn: { body: {} },
        statusCode,
      };
    }

    const events = await eventController.getEventsByActor(actorId);
    const statusCode = 200;
    return {
      toReturn: { body: events },
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

const eraseAllEvents = async () => {
  try {
    await eventController.eraseAllEvents();
    const statusCode = 200;
    return {
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

module.exports = {
  createEvent,
  getAllEvents,
  eraseAllEvents,
  getEventsByActor,
};
