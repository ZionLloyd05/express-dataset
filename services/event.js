const eventController = require('../controllers/event');
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
      toReturn: { status: 'success', data: events },
      statusCode,
    };
  } catch (error) {
    const statusCode = 500;
    return {
      statusCode,
    };
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
