// object literal syntax

let student = {
    name: "Bob",
    age: 22,
    address: {
        street: "123 Siandra Drive",
        state: "NSW",
        city: "Sydney"
    }
}

// retrieve student street name
console.log(student.address.street);

student["address"]["country"] = 'australia'

student.address.country = "australia"

console.log(student)
// add country to the student address
