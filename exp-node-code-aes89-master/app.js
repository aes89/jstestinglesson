const express = require("express")

const app = express()
const express = require("body-parser")
const port = 3000

const students = ["latchy", "Ben", "Anfii"]

// body parser middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//middlewear function. good for checks, error handling, input validation
//.use - middlewear
// can pass: app.post("//students", () ...etc see below
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next() //must include this! or will pause here and not continue
  })  

  //not a good way to structure a view file. js template engines. Pug (no tags, indentation), HML, EJS, express handlebars (use this one, {{{body}}} ,- all you need, double curly around dynamic data). rewatch from 114 to install etc
//   app.get("/", (req, res)=>{
//     res.send(`<h1> Hello world </h1>`)
// })

app.get("/", (req, res)=>{
    // res.send(`<h1> Hello world </h1>`)
    res.render('home', {
       student: students[0] 
    })
})



app.get("/", (req, res)=>{
    res.send("hello world from express!")
})

//to get names from the students array in postman:
app.get("/students", (req, res)=>{
    // res.write(JSON.stringify(students)) no response, express doesn't need stringify
    // res.send(students) //always send  a response

    const studentOne = students[Math.floor(Math.random() * students.length)];
    const studentTwo = students[Math.floor(Math.random() * students.length)];
    res.render('home', {
       student1: studentOne,
       student2: studentTwo

})

//add another student
app.post("/add", (req, res) => {
    console.log(req)
    res.send(students)
})

//middlewear funciton - common way to use. can chain middleware. should always be before function
app.post("/students",(req, res, next) =>{
    console.log("middle ware running") //validation whatever here
    next()
}, (req,res) => {
    console.log(req.body) //gets Simon back in postman somewhere??
    students.push(req.body.name)
    res.send(students)
}) 


// https://github.com/expressjs/body-parser help read data from request body. middlewear? between request and response



// listen on a specific port
app.listen(port, () => console.log(`listening on port ${port}`))

// lots of headers set automatically

// coppied from Nands -should be working
// const express = require("express")
// const app = express()
// const bodyParser = require('body-parser')
// const exphbs  = require('express-handlebars');
// const port = 3000

// const students = ["latchy", "Ben", "Anfii"]

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // body parser middlewares
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// // use means its a middle ware
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

// app.get("/", (req, res)=>{
//     // res.send(`<h1> Hello world </h1>`)
//     res.render('home', {
//        student: students[0]
//     })
// })

// app.get("/students", (req, res)=>{
//     // res.write(JSON.stringify(students))
//     res.send(students)
// })
// app.post("/add", (req,res) => {
//     console.log(req.body)
//     students.push(req.body.name)
//     res.send(students)
// })

// // middleware as part of the request : alternate syntax
// app.post("/students",(req, res, next) =>{
//     console.log("middle ware running")
//     next()
// },(req,res) => {
//     res.send(students)
// })


// // listen on a specific port
// app.listen(port, () => console.log(`listening on port ${port}`))