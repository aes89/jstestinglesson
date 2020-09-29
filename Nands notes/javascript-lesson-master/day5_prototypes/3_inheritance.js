function Human(){
    this.legs = 2;
    this.arms = 2;
    this.head =1;

    // this.walk = function(){
    // return `Taking a stroll with my ${this.legs} legs`
    // }
}

Human.prototype.walk = function(){
    return `Taking a stroll with my ${this.legs} legs`
}


// function inherits from parent Human
function Man(name){
    Human.call(this) // pass the reference of this object to the Human object constructor
    this.name = name;
}

let simon = new Man("simon");
console.log(simon);

console.log(simon.walk())  // does not work when it comes to inheritance


Man.prototype = Object.create(Human.prototype)
let simon = new Man("simon");
console.log(simon.walk());

// class Man extends Human