const { getPosts, getPost, makePost, removePost, changePost} = require("../controllers/posts_controller")
// needed when dividing files
const express = require("express")
const router = express.Router()

// READ
// GET on '/posts'
// Returns all posts
router.get("/", getPosts)

// READ
// GET on '/posts/:id'
// Returns post with given id
router.get("/:id", getPost)

router.post("/", makePost)
router.delete("/:id", removePost)
router.put("/:id", changePost)

// needed when dividing files
module.exports = router