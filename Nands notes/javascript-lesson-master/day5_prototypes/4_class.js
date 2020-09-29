// syntactic sugar for programmers from other language to ease into js was introducced in ES6

// difference between functions and classes
// 1.functions are hoisted, classes are not hoisted
// 2. class have a class method (called static methods, which can directly be called on a class. function s don't have a static method)

class Shape {
    // similar to initialize in ruby
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height
    }
}

// Shape.prototype.color = "red"

Shape.prototype.myFunc = function(){
    console.log("custom function")
}

// create an instance

let square = new Shape(10, 10)
// square.prototype //does not work
// attached on the constructor function or a class not on instances

let rectangle = new Shape(10, 20)


console.log(square.area())
console.log(square.color)
// console.log(rectangle.color)





// function Shape(width, height){
//     this.width = width;
//     this.height= height
// }