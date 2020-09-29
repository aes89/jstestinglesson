// prototype or constructor : pascal case
function Person(name, age){
    // "this" refers to function Person in here
    this.name = name;
    this.age = age;
    this.awesome = true;
}

// create an instance : using constructor syntax
let student1 = new Person("Nick", 20);
let student2 = new Person("hugh", 18)


Person.prototype.country = "Australia"
console.log(Person)
console.log(student2)

console.log(student1.country);
console.log(student2.country);


// attach say country to function person