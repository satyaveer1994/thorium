//const { Router } = require('express');
const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const blogsController = require("../controllers/blogsController");
const middleWare = require("../middleWare/auth");

// AUTHOR APIS
router.post("/createAuthor", authorController.author); // create author

// ### POST /blogs
router.post("/createBlogs", middleWare.authenticate, blogsController.blogs); // create blog

// ### GET /blogs
router.get("/getBlogs", middleWare.authenticate, blogsController.getBlog); // find blog by quary in authorid,catagory,subcatagory and tags

router.put(  "/blogs/:blogId",middleWare.authenticate,middleWare.authorise,blogsController.updateBlog); // update blog by params by giving element in body

router.delete("/blogs/:blogId",middleWare.authenticate,middleWare.authorise,blogsController.deleteBlog); // delete blog by using blogid in params

router.delete("/blogs",middleWare.authenticate,middleWare.authorise1,blogsController.deleteByQueryParam); // delete blog by using quary

// phase 2

router.post("/login", authorController.loginAuthor); // using psot api to login

module.exports = router;
