const Address = require('./classes/Address');
const Person = require('./classes/Person');
const Event = require('./classes/Event');

const data = {
    address: {
        className: Address,
        stringName: 'Address'
    },
    person: {
        className: Person,
        stringName: 'Person'
    },
    event: {
        className: Event,
        stringName: 'Event'
    }
};

module.exports = data;
