## Steps to start project
* how would you start project : npm init -y
* what packages needs to be installed - express , nodemon (dev), jest (dev), supertest(dev)
* Create server and test folders
* add server/app.js and modify packagejson "main" key
* Modify start and test script
* Run npm start, npm test
* create folders : routes, controllers, utils, test, data in server
* create test files in test folder


## server/app.js
* import express
* listen on port 3000
* ensure server starts without any error

## server/ routes/post_routes.js
* contains post routes code and export the router to app.js

## server/ controller/post_controller.js
* contains post controller code must be exported to be invoked in routes file

## server/ util/utilities.js
* contains helper functions must be exported and invoked by both controller and test units

## server/data/blog_posts.json and server/data/blog_posts.test.json
* contains a file which holds actual and test data for the CRUD action ( This will be replaced by Mongo in future)

## test
* contains test scripts to test the functionalities

## github action: CI CD
* https://edstem.org/courses/4296/lessons/5486/slides/40675
* https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs#starting-with-the-nodejs-workflow-template


## From Shared Notes
Agenda:

Express CRUD 
Routes : get, post, put, delete
Controller
Testing
Github Action : CI CD


Resources:

Canvas Content : https://coderacademy.instructure.com/courses/308/pages/express-crud?module_item_id=15896

Ed Lesson Testing : https://edstem.org/courses/4296/lessons/5486/slides/40670

Complete project repo : https://github.com/NandiniNayak/expressCrudAndTesting

Vs code live share: 
https://prod.liveshare.vsengsaas.visualstudio.com/join?C259F0B697A3DEAF738963DC29D92E3E61DE


Express docs: https://expressjs.com/en/starter/hello-world.html
                        https://expressjs.com/en/guide/routing.html
                        
Testing docs: https://www.npmjs.com/package/supertest
                         https://jestjs.io/docs/en/getting-started
                         
Songs
https://www.youtube.com/watch?v=CiNZv4NyFRY
https://www.youtube.com/watch?v=RkZxyDXudq8
https://www.youtube.com/watch?v=yugldxpRDMo



## Notes
Need views and controllers, also models but not covered today as will be read/writing to file. 
Folders to make: controllers, views, routes, data and util (helpers and testing, bridge between test and controller).
To listen on a particular port - in app.js const express= require("express") etc see file
app.js is first file to get executed. To post - 