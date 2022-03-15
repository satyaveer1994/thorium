const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Phase - 1

// create author
router.post("/createAuthor", authorController.createAuthor)

//  create blog
router.post("/createBlog", blogController.createBlog)

//  delete blog by query
router.delete("/deleteBlogByQuery", blogController.deleteBlogByQuery)

// delete blog by path params
router.delete("/blog/:blogId", blogController.deleteBlogByPath)

//  update blog
router.put("/updateBlog/:blogId" , blogController.updateBlog)

//  get blog
router.get("/getBlogs" , blogController.getBlogs)


module.exports = router;