const address = {
    id: Number,
    state: String,
    city: String,
    zipCode: String,
    addressLine1: String,
    addressLine2: String
};

const person = {
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    id: Number,
    address: addressId
};

const event = {
    id: Number,
    address: addressId,
    eventAttendees: eventAttendeeId
};

const eventAttendee = {
    id: Number,
    eventId: Number,
    personId: Number
};
