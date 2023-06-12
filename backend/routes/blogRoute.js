const express = require("express");
const {
  blogCreate,
  blogEdit,
  blogGet,
  blogsGet,
  blogGetUser,
} = require("../Controllers/blogController");
const { auth } = require("../Controllers/authController");
const blogRoute = express.Router();

blogRoute.post("/create", auth, blogCreate);
blogRoute.post("/edit/:blogId", auth, blogEdit);
blogRoute.get("/blogs/:blogId", blogGet);
blogRoute.get("/", blogsGet);
blogRoute.get("/user/:id", auth, blogGetUser);

module.exports = blogRoute;
