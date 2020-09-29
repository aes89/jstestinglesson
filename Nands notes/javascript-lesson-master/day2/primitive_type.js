// Number:
// String:
// Boolean:
// Null: similar to nil in ruby, defined by developers
// undefined: non existant value : defined by javascript engine


// Non primitive:
// Array
// Object

name = "Luke" // bad practice
// JE syntax parses this
// hoisting

var name = "Luke"; // good practice

console.log(name.length)
console.log(name.charAt(1))

// concatenation

console.log("Tho" + "name");

// multine code : use string literal(back ticks)

console.log(` we are an
awesome class
`)

// string interpolation
console.log(`my name is ${name}`)