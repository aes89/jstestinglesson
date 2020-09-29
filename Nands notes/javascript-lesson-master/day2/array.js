greet =(name) => console.log(`hello ${name}`)

// quick aside
var data = ["zeb", "alex", "varsha", 10, 20, true, greet]

// data[6](data[0])


var names = ["zeb", "varsha", "alex"]
names.push("carl")
names.pop()
names.unshift("lavanya")
names.shift()




// console.log(names)


// names.forEach(name => {
//     console.log(`hello ${name}`)
// });
// console.log(names)
// // map operation : map takes an old array and return a new array

// newData = names.map(name => {
//     return `hello ${name}`
// })
// console.log(names)
// console.log(newData)

// copy array : use a rest operator ...

var names = ["zeb", "varsha", "alex"]

// deep copy
var [...copyNames] = names
names[0] = "nands"
console.log(names)
console.log(copyNames)

num1 = 10
num2 = num1
num1 = 20
console.log(num1)
console.log(num2)