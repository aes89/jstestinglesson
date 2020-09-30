const { getAllPosts, getPostById, addPost, deletePost, updatePost } = require("../utils/utilities")

const getPosts = (req, res) => {
	res.send(getAllPosts(req))
}

const getPost = (req, res) => {
	let post = getPostById(req)
	if (post) res.send(post)
	else {
		res.status(404)
		res.send(req.error)
	}
}
const makePost = (req, res) => {
	let post = addPost(req)
	if (post) {
		res.status(201)
		res.send(post)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}

const removePost = (req, res) => {
	let blogPosts = deletePost(req.params.id)
	res.send(blogPosts)
}

const changePost = (req, res) => {
	let post = updatePost(req)
	if (post) {
		res.status(200)
		res.send(post)
	} else {
		res.status(500)
		res.send(`Error occurred: ${req.error}`)
	}
}

module.exports = {
	getPosts,
    getPost,
    makePost,
    removePost,
    changePost
}
