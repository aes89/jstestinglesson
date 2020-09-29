json

{
  "name": "exp-node-code-aes89-master",
  "version": "1.0.0",
  "description": "real world projects should have a good description",
  "main": "express_app.js", // must match your actual main file
  "scripts": { // very important
    "test": "echo \"Error: no test specified\" && exit 1"
    // "script-name": "command" // "npm run script-name"
    "start": "node express_app.js" // npm run start in terminal runs app
  },
  "author": "",
  "license": "ISC"
}


// to install a package npm install (or i) name-of-package --save (save is auto)


steps
## package.json: to install all packages
how to create package.json ? - npm init
installed express: npm i express
created script: start
required express and created a get route
started listening for server

nodemon restarts server whenever file saved, dev mode only --save--dev
need to run app with nodemon now (update start script to nodemon)

Lesson Plan:
* Node.js webserver
* npm init
* npm packages
* npm scripts
* Nodemon
* Express.js
* Middleware
* Body parser
* JavaScript Templating Engines

Resources:
    VS code : live share:
        https://prod.liveshare.vsengsaas.visualstudio.com/join?1B1BBF4F65BDF599EBBD5995721D603441B2
        
        
*Canvas: https://coderacademy.instructure.com/courses/308/pages/nodejs?module_item_id=15888
                https://coderacademy.instructure.com/courses/308/pages/expressjs?module_item_id=15889

* Node http : https://nodejs.org/dist/latest-v12.x/docs/api/http.html
                      https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_class_http_server

* Express: https://expressjs.com/en/api.html

* Routing: https://expressjs.com/en/guide/routing.html

* MiddleWare : https://expressjs.com/en/guide/using-middleware.html

* Body Parser: http://expressjs.com/en/resources/middleware/body-parser.html
                        https://github.com/expressjs/body-parser

* HandleBars : https://handlebarsjs.com/guide/
                        https://github.com/ericf/express-handlebars
                        
                        

Handy VS Code Extensions:

    Bracket Pair Colorizer 2

    ES7 React/Redux/etc snippets

    ESLint

    Prettify JSON

    Import Cost

    JavaScript (ES6) code snippets

    Path Intellisense

    Live Server

    Simple React Snippets

                        

