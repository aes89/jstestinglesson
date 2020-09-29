class Dog {
    constructor(name) {
        this.name = name;
        Dog.count++;
    }
    
    static dogCount() {
        return `the dog count is ${Dog.count}`;
    }
}

Dog.count = 0
var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

// what is your understanding of static method
// ans: method called without an instance directly on class
// how can we retrieve dog count?

console.log(Dog.dogCount());