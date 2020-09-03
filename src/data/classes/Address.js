class Address {
    constructor(body) {
        this.state = body.state;
        this.city = body.city;
        this.zipCode = body.zipCode;
        this.addressLine1 = body.addressLine1;
        this.addressLine2 = body.addressLine2;
    }

    getBody() {
        return {
            state: this.state,
            city: this.city,
            zipCode: this.zipCode,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2
        };
    }

    toJSON() {
        return JSON.stringify(this.getBody());
    }
}

module.exports = Address;
