const Address = require('./classes/Address');
const Person = require('./classes/Person');
const Event = require('./classes/Event');
const Models = require('../config/mongo-config');

const data = {
    address: {
        class: Address,
        model: Models.AddressModel
    },
    person: {
        class: Person,
        model: Models.PersonModel
    },
    event: {
        class: Event,
        model: Models.EventModel
    }
};

module.exports = data;
