const mongoose = require('mongoose');
const { configureMongoCollectionName } = require('../helpers/mongo-methods');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const eventSchema = new Schema({
    address: {
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Address')
    },
    eventAttendees: [{
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Person')
    }],
    virtual: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    timeZone: {
        type: String,
        required: true
    }
});

const addressSchema = new Schema({
    state: {
        type: String,
        required: true,
        unique: false
    },
    city: {
        type: String,
        required: true,
        unique: false
    },
    zipCode: {
        type: String,
        required: true,
        unique: false
    },
    addressLine1: {
        type: String,
        required: true,
        unique: false
    },
    addressLine2: {
        type: String,
        required: false,
        unique: false
    }
});

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    eventsAttended: [{
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Event')
    }],
    phoneNumber: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: configureMongoCollectionName('Address')
    }
});

module.exports = {
    addressSchema,
    personSchema,
    eventSchema
};
