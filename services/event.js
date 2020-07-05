const eventController = require('../controllers/event');
const actorController = require('../controllers/actor');
const IsEmpty = require('../helpers/isEmpty');

const createEvent = async (eventForCreate) => {
  try {
    //   Check if event already exist
    const eventInDb = await eventController.getEventById(eventForCreate.id);

    if (!IsEmpty(eventInDb)) {
      const statusCode = 400;
      return {
        statusCode,
      };
    }

    // create event if it doesn't exist
    const event = await eventController.addEvent(eventForCreate);

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

    const toReturn = events;
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

const getEventsByActor = async (actorId) => {
  try {
    const actor = await actorController.getActorById(actorId);

    if (IsEmpty(actor)) {
      const statusCode = 404;
      return {
        toReturn: {},
        statusCode,
      };
    }

    const events = await eventController.getEventsByActor(actorId);
    const statusCode = 200;

    const toReturn = events;

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
