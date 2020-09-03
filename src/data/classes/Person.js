class Person {
    constructor(body) {
        this.firstName = body.firstName;
        this.lastName = body.lastName;
        this.eventsAttended = body.eventsAttended;
        this.phoneNumber = body.phoneNumber;
        this.email = body.email;
        this.address = body.address;
    }

    getBody() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            eventsAttended: this.eventsAttended,
            phoneNumber: this.phoneNumber,
            email: this.email,
            address: this.address
        };
    }

    toJSON() {
        return JSON.stringify(this.getBody());
    }
}

module.exports = Person;
