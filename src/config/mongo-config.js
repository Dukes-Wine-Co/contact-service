const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const { mongoUrl } = require('./app-config');

const {
    mongoConnect,
    configureMongoCollectionName
} = require('../helpers/mongo-methods');

const {
    addressSchema,
    personSchema,
    eventSchema
} = require('../data/mongo-schemas');

mongoConnect(mongoose, mongoUrl);

eventSchema.plugin(findOrCreate);
addressSchema.plugin(findOrCreate);
personSchema.plugin(findOrCreate);

const EventModel = mongoose.model(configureMongoCollectionName('Event'), eventSchema);
const AddressModel = mongoose.model(configureMongoCollectionName('Address'), addressSchema);
const PersonModel = mongoose.model(configureMongoCollectionName('Person'), personSchema);

module.exports = {
    AddressModel,
    PersonModel,
    EventModel
};
