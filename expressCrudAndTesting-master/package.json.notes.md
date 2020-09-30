{
  "name": "express_crud_testing",
  "version": "1.0.0",
  "description": "",
  "main": "server/app.js",
  "scripts": {
    "test": "jest",
    "start": "nodemon"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^26.4.2",
    "nodemon": "^2.0.4",
    "supertest": "^5.0.0"
  }
}


{
  "name": "lesson2_crud_testing",
  "version": "1.0.0",
  "description": "* how would you start project : npm init -y * what packages needs to be installed - express , nodemon (dev), jest (dev), supertest(dev) * Create server and test folders * add server/app.js and modify packagejson \"main\" key * Modify start and test script * Run npm start, npm test * create folders : routes, controllers, utils, test, data in server * create test files in test folder",
  "main": "server/app.js", // changed this from index?
  "scripts": {
    "test": "jest",
    "test-cc": "jest --coverage",
    "start": "node server/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^26.4.2",
    "nodemon": "^2.0.4",
    "supertest": "^5.0.0"
  },
  "directories": {
    "test": "test"
  }
}


