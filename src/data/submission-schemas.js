import { usStates } from './us-states';

const addressFormArr = [
    { keyName: 'state', label: 'State', data: usStates, type: 'select' },
    { keyName: 'city', label: 'City' },
    { keyName: 'zipCode', label: 'Zip Code' },
    { keyName: 'addressLine1', label: 'Address Line 1' },
    { keyName: 'addressLine2', label: 'Address Line 2' }
];

const personFormArr = [
    { keyName: 'firstName', label: 'First Name' },
    { keyName: 'lastName', label: 'Last Name' },
    { keyName: 'phoneNumber', label: 'Phone Number', type: 'tel' },
    { keyName: 'email', label: 'Email', type: 'email' },
    { keyName: 'eventsAttended', label: 'Events Attended', data: usStates, type: 'select', multiple: true }
];

const eventFormInfo = [
    { keyName: 'title', label: 'Event Title' },
    { keyName: 'eventDate', label: 'Event Date', type: 'date' },
    { keyName: 'startTime', label: 'Start Time', type: 'time' },
    { keyName: 'endTime', label: 'End Time', type: 'time' }

];

export {
    addressFormArr,
    personFormArr,
    eventFormInfo
};
