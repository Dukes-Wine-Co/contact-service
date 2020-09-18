const homeLink = { key: 'home', link: '/', name: 'Home' };

const submitLinks = [
    { key: 'events', link: '/submit/event', name: 'Events' },
    // { key: 'event-attendee', link: '/submit/event-attendee', name: 'Event Attendees' },
    { key: 'person', link: '/submit/person', name: 'Person' },
    { key: 'bulk-submission', link: '/submit/bulk-submission', name: 'Bulk Submission' }
];

const requestLinks = [
    { key: 'events', link: '/display/event', name: 'Events' },
    // { key: 'event-attendee', link: '/display/event-attendee', name: 'Event Attendees' },
    { key: 'person', link: '/display/person', name: 'Person' },
    { key: 'address', link: '/display/address', name: 'Address' }
];

export { submitLinks, requestLinks, homeLink };
