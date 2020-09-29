var person = {
    firstName: "Alex",
    lastName: "Holder",
    fullName: function () {
        console.log(`hello ${this.firstName} ${this.lastName}`);
    }
}

person.fullName();