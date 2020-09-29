// Create three classes:

// Person

// Teacher

// Student

// Teacher & Student should inherit from Person.

// Person should have instance properties for:

// a string property named 'name' that gets set in the Person constructor

// a string property named 'city' that gets set in the Person constructor

// A Teacher should have instance properties for:

// an array of strings named "classesTeaching" that gets set in the Teacher constructor

// A Student should have instance properties for:

// an array of strings named "classesStudying" that gets set in the Student constructor

// All classes should have a static property named "count" that keeps track of how many instances have been made. Note that your solution should try to be as DRY as possible - keep an eye out for duplicated code (eg. the same functions in multiple classes) and find ways to reduce that duplication!

class Person{
    constructor(name, city){
        this.name = name
        this.city = city
        // console.log(this.constructor.name)  // Teacher or Student or Person
        Person.peopleCount(this.constructor.name)
    }

    // update the key and value in the counter object to holder teacher1, student and person count
    static peopleCount(name){ 
            Person.counter[name] = Person.counter[name] ? Person.counter[name] + 1 : 1
            if (name !== this.name){
                Person.counter[this.name]= Person.counter[this.name] ?  Person.counter[this.name] + 1 : 1
            }
    }
    // class variable to track teacher1, student and person count
    static counter = {}
    static count(){
        return Person.counter[this.name]
    }
}

class Teacher extends Person{
    constructor(name, city, classesTeaching){
        super(name,city)
        this.classesTeaching = classesTeaching
    }
}

class Student extends Person{
    constructor(name, city, classesStudying){
        super(name,city)
        this.classesStudying = classesStudying
    }
}

let teacher1 = new Teacher('nands','sydney',["ruby","js"])
let teacher2 = new Teacher('alex','sydney',["js","game development"])
let teacher3 = new Teacher('alex','sydney',["js","game development"])
let student1 = new Student('Rachel','Sydney',["ruby","js"])
let student2 = new Student('Tom','Sydney',["ruby","js"])

console.log(Person.count())
console.log(Teacher.count())
console.log(Student.count())

