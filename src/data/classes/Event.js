class Event {
    constructor(body) {
        this.address = body.address;
        this.virtual = body.virtual;
        this.title = body.title;
        this.eventDate = new Date();
        this.startTime = body.startTime;
        this.endTime = body.endTime;
        this.timeZone = body.timeZone;
        this.eventAttendees = body.eventAttendees;
    }

    getBody() {
        return {
            address: this.address,
            eventAttendees: this.eventAttendees,
            virtual: this.virtual,
            title: this.title,
            eventDate: this.eventDate,
            startTime: this.startTime,
            endTime: this.endTime,
            timeZone: this.timeZone
        };
    }

    toJSON() {
        return JSON.stringify(this.getBody());
    }
}

module.exports = Event;
