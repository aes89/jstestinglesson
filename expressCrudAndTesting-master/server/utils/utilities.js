let dataFile = "../../server/data/blog_posts.json"
let blogPosts = require(dataFile)
const fs = require('fs');

const getAllPosts = (req) => {
	return blogPosts
}

const getPostById = (req) => {
	let post = blogPosts[req.params.id]
	if (post) return post
	else req.error = "Post not found"
}
const addPost = (req) => {
	try {
		const date = Date.now()
		let blogPost = {
			title: req.body.title,
			create_date: date,
			modified_date: date,
			username: req.body.username,
			content: req.body.content,
			category: req.body.category || ""
		}
		blogPosts[getNextId()] = blogPost
		// node file write: in future this will be replaced with mogodb create
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(blogPosts))
		return blogPost
	}
	catch(error) {
		console.error(error)
		req.error = error
		return null
	}
}

const deletePost = (id) => {
	if (Object.keys(blogPosts).includes(id)) {
		delete blogPosts[id]
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(blogPosts))
	} 
	return blogPosts
}

// Returns the next available id for a blog post
function getNextId() {
	let sortedIds = Object.keys(blogPosts).sort()
	nextId = (sortedIds.length != 0) 
			? parseInt(sortedIds[sortedIds.length-1]) + 1
			: 1
	return nextId
}

const updatePost = (req) => {
	try {
		let id = req.params.id
		if (!blogPosts[id]) throw "Post not found"
		blogPosts[id].title = req.body.title
		blogPosts[id].content = req.body.content
		blogPosts[id].category = req.body.category 
				? req.body.category 
				: blogPosts[id].category
		blogPosts[id].modified_date = Date.now()
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(blogPosts))
		return blogPosts[id]
	} catch (error) {
		req.error = error
		return null
	}
}

// Allows flexibility for testing
// Loads data from dataFile with fs
function loadData(path) {
  blogPosts = JSON.parse(fs.readFileSync(path,'utf8'))
}

const getDataFileRelativeToApp = (file) => {
	// Remove the ../ from the dataFile path for writing
	// because the writeFile looks for path relative to the app, not utilities.js
	return file.substring(file.lastIndexOf("../") + 3, file.length)
}

module.exports = {
	getAllPosts,
    getPostById,
    addPost,
    deletePost,
    updatePost,
	loadData,
	getDataFileRelativeToApp
}

