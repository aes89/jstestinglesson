// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};


function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

// code above is a simple version of code below ( hence call(this) is a shorthand )

// function Teacher(first, last, age, gender, interests, subject) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.subject = subject;
// }


let person1 = new Person("Surendra","Sapkale",20,"male",["coding", "painting"] )
let teacher1 = new Teacher("nandini", "nayak", 25, "female",["cooking","music"],"javascript")

// console.log(teacher1.name)
// console.log(teacher1.interests)
// console.log(teacher1.subject)

// / We have defined a new constructor (Teacher), and it has a prototype property, which by default just contains an object with a reference to the constructor function itself
//It does not contain the methods of the Person constructor's prototype property.

//console.log(teacher1.greeting())  //error greeting is not a function


// To solve problem above we could use Object.create syntax
Teacher.prototype = Object.create(Person.prototype);
let teacher2 = new Teacher("nandini", "nayak", 25, "female",["cooking","music"],"javascript")
// 1. Here our friend create() comes to the rescue again. In this case we are using it to create a new object and make it the value of Teacher.prototype. The new object has Person.prototype as its prototype and will therefore inherit, if and when needed, all the methods available on Person.prototype.



// 2.We need to do one more thing before we move on. After adding the last line, Teacher.prototype's constructor property is now equal to Person(), because we just set Teacher.prototype to reference an object that inherits its properties from Person.prototype! 

console.log(Teacher.prototype.constructor) // [Function: Person]

// 3. This can become a problem, so we need to set this right. You can do so by  adding the following line :

// Object.defineProperty(Teacher.prototype, 'constructor', { 
//     value: Teacher, 
//     enumerable: false, // so that it does not appear in 'for in' loop
//     writable: true });

// console.log(Teacher.prototype.constructor) // [Function: Teacher]

Teacher.prototype.greeting = function() {
  let prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Ms.';
  } else {
    prefix = 'Mx.';
  }

  console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};


// since teacher has a prototype greeting first that is accessed before relying on parent greeting
teacher2.greeting()