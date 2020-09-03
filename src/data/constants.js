const Address = require('./classes/Address');
const Person = require('./classes/Person');
const Event = require('./classes/Event');
const Models = require('../config/mongo-config');

const data = {
    address: {
        className: Address,
        modelName: Models.AddressModel,
        stringName: 'Address'
    },
    person: {
        className: Person,
        modelName: Models.PersonModel,
        stringName: 'Person'
    },
    event: {
        className: Event,
        modelName: Models.EventModel,
        stringName: 'Event'
    }
};

module.exports = data;
