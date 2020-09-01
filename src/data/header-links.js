const homeLink = { key: 'home', link: '/', name: 'Home' };

const submitLinks = [
    { key: 'events', link: '/event', name: 'Events' },
    { key: 'event-attendee', link: '/event-attendee', name: 'Event Attendees' },
    { key: 'person', link: '/person', name: 'Person' },
    { key: 'bulk-submission', link: '/bulk-submission', name: 'Bulk Submission' }
];

const requestLinks = [
    { key: 'events', link: '/display/event', name: 'Events' },
    { key: 'event-attendee', link: '/display/event-attendee', name: 'Event Attendees' },
    { key: 'person', link: '/display/person', name: 'Person' },
    { key: 'address', link: '/display/address', name: 'Address' }
];

export { submitLinks, requestLinks, homeLink };
