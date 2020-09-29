const dataString = require('./data');
class Weather {
  // Your Code Here!
  constructor(data){
      this.data = JSON.parse(data)
  }

  getMaxTemp(){
      return this.data.consolidated_weather.map(el => el.max_temp)
  }
}

weather1 = new Weather(dataString)
console.log(weather1.getMaxTemp())
// let data = {
//     details: [
//         {
//             name: "rachel",
//             age: 20,
//             gender: "female"
    
//         },
//          {
//             name: "nands",
//             age: 20,
//             gender: "female"
    
//         },
//         {
//             name: "Ash",
//             age: 20,
//             gender: "female"
    
//         },
//           {
//             name: "Kalyani",
//             age: 20,
//             gender: "female"
    
//         }
//     ]
// }

// names = data.details.map(person => person.name)
// console.log(names)