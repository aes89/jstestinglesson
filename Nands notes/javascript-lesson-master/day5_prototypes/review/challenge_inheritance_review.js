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
        Person.counter ++
    }
    // static means class method : called directly upon class
    static count(){
        this.counter = 0
        // this points to Person
    }
}
class Teacher extends Person{
    constructor(name, city, classesTeaching){
        super(name,city)
        this.classesTeaching = classesTeaching
        Teacher.counter ++
    }
    // super
    // static count(){
    //     this.counter = 0
    // }
}
class Student extends Person{
    constructor(name, city, classesStudying){
         super(name,city)
        this.classesStudying = classesStudying
        Student.counter ++
    }
    // super
    // static count(){
    //     this.counter = 0
    // }
}

// ininitalize counters to zero
Person.count()
Teacher.count()
Student.count()

teacher1 = new Teacher("nands","syndey",["ruby", "js"])
teacher2 = new Teacher("alex","syndey",["ruby", "js"])
student1 = new Student("callum","syndey",["ruby", "js"])
student2 = new Student("luke","syndey",["ruby", "js"])
student3 = new Student("jordon","syndey",["ruby", "js"])

console.log(Person.counter)
console.log(Teacher.counter)
console.log(Student.counter)

// Person.count = 0