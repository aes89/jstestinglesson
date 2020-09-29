class Person {
    constructor(who, city){
        this.name = who;
        this.city = city;
        Person.addToCounter(this.constructor.getClassName());
    }
    static getClassName() {
        return this.name;
    }

    static counter = {}

    static addToCounter(x) {
        Person.counter[x] = (Person.count[x] ?? 0) + 1;
        if(x != "Person") {
            Person.counter["Person"] = (Person.counter["Person"] ?? 0) + 1;
        }
    }

    static count() {
        return Person.counter[this.getClassName()];
    }


}

class Teacher extends Person {
    constructor(name, city, classesTeaching){
        super(name, city);
        this.classesTeaching = classesTeaching;
    }
}

class Student extends Person{
    constructor(name, city, classesStudying){
        super(name, city);
        this.classesStudying = classesStudying;
    }
}

const alex = new Person("alex", "mebls");
const ali = new Teacher("alisa", "wa", "this");
const joe = new Student("joe", "here", "nothing");
console.log(Person.count);