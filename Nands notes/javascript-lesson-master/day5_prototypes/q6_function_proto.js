
function Dog(name,location){
    this.name = name
    this.location = location
}

Dog.prototype.speak = function(){
    return `whoof my name is ${this.name} and I am from ${this.location}`
}

// dog1.prototype.location= this.location  //cannot do this

// Dog.prototype.country = "Australia"  always attach a prototype method to a constructor function not to the instances

Dog.prototype.setLocation = function(loc) {
    this.location = loc
}

let dog1 = new Dog("jeff", "Murica")
let dog2 = new Dog("tommy", "Melbourne")

dog1.country = "Australia"   //result is weird
console.log(dog2.country)

console.log(dog1)

dog1.setLocation("Sydney")

console.log(dog1.speak())
console.log(dog2.speak())


// Add a property speak : whoof my name is dogName and my location is locationName
// Add a property to  setlocation (change location)
// create two dog instance and retreive their location and call speak method
