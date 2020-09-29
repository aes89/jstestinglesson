
// write a custom upcase function for String, which capitalizes only first letter like in ruby

// code here
// hint use prototype on string


// return name.charAt(0).toUpperCase() + name.slice(1)
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1)
}

name = "latchy"
console.log(name.capitalize()) //Latchy


console.log("thomas".capitalize())
