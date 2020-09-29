//Object creation through a function constructor
// let obj = {}  //literal

let object2 = new Object();

Object.prototype.saySomething = function () {
    console.log("hellow")
}

// What is the output

object2.name = "keefer"
object2.saySomething()
console.log(object2);

// add a property called name to this object 
// add a function property called speak to this opject


