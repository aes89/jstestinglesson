class Person {
    // method called constructor, used to initialize variables and they are invoked each time an instance is created
    constructor(first,last,age,gender,interests){
        // attach those variable to this object
        // this.first = first
        // this.last = last
        this.details = { first, last, age, gender, interests}
        // this.age = age
    }
    // method: behaves just like function
    // greeting(){
    //     console.log(`hello my name is ${this.details.first} ${this.details.last}`)
    // }

    // don't necssarily have to define all methods inside class like ruby
}

Person.prototype.greeting = function(){
    console.log(`hello my name is ${this.details.first} ${this.details.last}`)
}

// instances
let personInstance1 = new Person("Red", "Vazquez",20,'Male', ["gaming", "coding"])
let personInstance2 = new Person("Callum", "Worall",22,'Male', ["balling", "painting"])
console.log(personInstance1.details.interests[0])
console.log(`hey ${personInstance1.details.first} you are ${personInstance1.details.age} years old`)

// paranthesis is a must while calling a function
console.log(personInstance2.greeting())


class Teacher extends Person {
    constructor(first, last, age, gender, interests,subject, grade) {
    super(first, last, age, gender, interests) //calls the corresponding method in the parent class

    this.subject = subject;
    this.grade = grade;
  }
}

let teacher1 = new Teacher("Alex","holder",20, 'Male',["Gaming","Learning french"],"c#","bootcamp")
console.log(teacher1.details.age)
