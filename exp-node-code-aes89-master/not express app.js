// this is without express/a framework.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// When we create an http server, we pass it a callback function that performs the actions of the server
// becomes a lot easier in express
const server = http.createServer((req, res) => {
  //res.statusCode = 200 // status code
  //res.setHeader("Content-Type", "text/plain") // header - setting header type as plain text
  // console.log(req.method, req.url) // comment out above 2 lines, in terminal will see e.g. "PUT /butts"
  //res.end("Hello World") // body

  // gets gross, framework help keep this clean, bad for dynamic routes
  if(req.method === "GET" && req.url === "/"){
    console.log("matching students")
} else if (req.method === "GET" && req.url === "/students") {
    console.log("getting students")
    // to send a response
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(students))
} else if (req.method === "POST" && req.url === "/students") {
    console.log("creating students")
} else {
    console.log("route not found")
}

})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

// to run - node app.js
