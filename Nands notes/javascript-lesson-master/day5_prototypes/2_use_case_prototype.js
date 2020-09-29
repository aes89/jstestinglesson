function Hero(name,level){
    this.name = name;
    this.level = level;

    // attach a function right here instead of a prorotype
    // this.shout = function(){
    //     return `My name is ${this.nam}`
    // }
}

// attach a function later

Hero.prototype.shout =  function(){
        return `My name is ${this.name}`
}

let superman = new Hero("Superman", 100);
let batman = new Hero("Batman", 60);

console.log(superman.shout())
console.log(batman.shout())

console.log(superman)
console.log(batman)
