const request = require('supertest');
const {app, server} = require("../server/app.js")

afterAll(async (done) => {
	// Force our server reference to close:
	await server.close(); 

	// Dumb hack to trick Jest into waiting a bit more before 
	// it freaks out over processes hanging open. 
	// Potentially because server.close() does not complete instantly? Not sure.
	// This has been an issue for ExpressJS & Jest devs 
	// for several years & solutions are vague.
	await new Promise(resolve => setTimeout(() => resolve(), 500)); 

	// Resolve the done() callback? Again not sure, as solutions are vague.
	done();
})

describe('Express server home page functionality', () => {
    test('should return status 200', async (done) => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);

        done();
    })

    test('should return the phase "Hello World!"', async (done) => {
        const response = await request(app).get('/');
        expect(response.body.message).toEqual("Hello World!");
        done()
    })
})

describe('/studentNames page functionality', () => {

    test('should return the word "Luke"', async (done) => {
        const response = await request(app)
        .post('/studentNames')
        .send({
            studentNames:["Luke", "Ash", "Nandini"]
        })
        expect(response.body.firstStudentName).toEqual("Luke");
        done();
    })
    
})

// test post routes
// add a post
describe('POST /post', () => {
    test('should add a post ', async (done) => {
        const response = await request(app)
        .post('/posts')
        .send({
            title: "Another post",
            username: "tester",
            content: "This is another blog post!",
            category: ""
        })
        expect(response.body.title).toEqual("Another post");
        done();
    })
})

// update a post
describe('PUT /posts/2 ', () => {
    test('should update a post ', async (done) => {
        const response = await request(app)
        .put('/posts/2')
        .send({
            title: "Updated post",
            username: "tester",
            content: "This is Updated blog post!",
            category: ""
        })
        expect(response.body.title).toEqual("Updated post");
        done();
    })
})

// get posts

// describe('GET /posts', () => {
//     test('should get all posts ', async (done) => {
//         const response = await request(app)
//         .get('/posts')
//         .set('Accept', 'application/json')
//         expect(Object.keys(response.body).length).toEqual(2)
//         done();
//     })
// })

// delete a post
describe('DELETE /posts/3', () => {
    test('should delete first post ', async (done) => {
        const response = await request(app)
        .delete('/posts/3')
		let ids = Object.keys(response.body)
		expect(ids.includes("3")).toBe(false)
        done();
    })
})

