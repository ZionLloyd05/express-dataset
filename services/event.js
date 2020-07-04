const eventController = require('../controllers/events');
const IsEmpty = require('../helpers/isEmpty');

const createEvent = async (eventToCreate) => {
  try {
    //   Check if event already exist
    const eventInDb = await eventController.getEventById(eventToCreate.id);

    if (!IsEmpty(eventInDb)) {
      const statusCode = 400;
      return {
        toReturn: { status: 'success', data: 'Event already exist' },
        statusCode,
      };
    }

    // create event if it doesn't exist
    const event = await eventController.addEvent(eventToCreate);

    const statusCode = 201;
    return {
      toReturn: { status: 'success', data: event },
      statusCode,
    };
  } catch (error) {
    console.error(error);
    const statusCode = 500;
    return {
      toReturn: { status: 'failed', data: error },
      statusCode,
    };
  }
};

const getAllEvents = async () => {
  try {
    console.log('got to service');
    const events = await eventController.getAllEvents();
    console.log(events);
    const statusCode = 200;
    return {
      toReturn: { status: 'success', data: events },
      statusCode,
    };
  } catch (error) {
    console.error(error);
    const statusCode = 500;
    return {
      toReturn: { status: 'failed', data: error },
      statusCode,
    };
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
