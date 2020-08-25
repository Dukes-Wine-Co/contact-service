const { EventModel } = require('../../config/mongo-config');
const Event = require('../../data/classes/Event');
const { findCollection } = require('../../helpers/controller-methods');

const populationFields = ['address', 'eventsAttendees'];

const EventControls = {
    find: async(req, res) => {
        const findObj = {
            collectionModel: EventModel,
            getAll: false,
            populationQueue: populationFields
        };

        const event = await findCollection(req, findObj);
        res.json(event);
    },
    all: async(req, res) => {
        const findObj = {
            collectionModel: EventModel,
            getAll: true,
            populationQueue: populationFields
        };

        const allEvents = await findCollection(req, findObj);
        res.json(allEvents);
    },
    create: async(req, res) => {
        const event = new Event(req.body).getBody();
        const newEvent = new EventModel(event);
        const savedEvent = await newEvent.save();
        res.json(savedEvent);
    }
};

module.exports = EventControls;
