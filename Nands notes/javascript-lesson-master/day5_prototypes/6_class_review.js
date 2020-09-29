// static methods are methods that can be called on class directly
// only class based constructors have static methods, function prorotypes don't have them
// function constructor (prototype)

// function prototype syntax for human
function FunctionHuman(name, age){
    this.name = name
    this.age = age
    console.log(this)
}


FunctionHuman.prototype.speak = function(){
    return `hello my name is ${this.name}`
}

FunctionHuman.prototype.walk = function(){
    return ` Hi I am ${this.name} and I love to walk`
}

// syntactic sugar of code above in class constructor
class ClassHuman{
    // its only to initialize and runs each time an instance is created
    constructor(name,age){
        // self in ruby
        this.name = name
        this.age = age
        // refers to the instance
        ClassHuman.data.peopleCount ++;
        console.log(this)
    }

    // class method
    // static getter(){
    //     return ClassHuman.data
    // }

    static setter(){
        ClassHuman.data={
            peopleCount: 0,
            myString: "Benjamin"
        }
        return ClassHuman.data
    }

    // static stringMethod(){
    //     ClassHuman.identifier = "Benjamin"
    // }

    //instance method
    speak(){
         return `hello my name is ${this.name}`
    }
}

ClassHuman.prototype.hairColor = "brown"

// ClassHuman.prototype.personCount
// prototype or instance methods ( called by instances)
// preferred
ClassHuman.prototype.speak = function(){
    return `hello my name is ${this.name}`
}


ClassHuman.prototype.walk = function(){
    return ` Hi I am ${this.name} and I love to walk`
}


// person1 and person2 are called insatnces
person1 = new FunctionHuman("ben", 25)
person3 = new FunctionHuman("rachel", 25)

ClassHuman.setter() // initialise people count to 0

person2 = new ClassHuman("surendra", 20)
person4 = new ClassHuman("nands", 20)

// console.log(person1.speak())
// console.log(person2.speak())
// console.log(person2.hairColor)
// console.log(person4.hairColor)

console.log(ClassHuman.data)



// you cannot add a prototype propert to an instanceof, it can be applied only to the function constructor
// person1.prototype.walk = function(){
//     return ` Hi I am ${this.name} and I love to walk`
// }