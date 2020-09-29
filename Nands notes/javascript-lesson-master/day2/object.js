// var profile = new Object(); // not recommended by airbnb style guide
// var profile = {};  // recommended
var profile = {
    name: "Kalyani",
    age: 20,
    hobbies: ["coding", "painting"],
    address: {
        street: 10,
        city: "sydney"
    },
    greet: (name) => {
        return `hello ${name}`
    }
}

console.log(profile.name)
console.log(profile['name'])
console.log(profile.address.city)
console.log(profile['address']['city'])
console.log(profile['address'].city)  // please don't do this


var {...copyProfile} = profile
profile.name = "Alex"
console.log(profile)
console.log(copyProfile)



