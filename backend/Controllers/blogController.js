const Blog = require("../models/Blogs");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const blogCreate = async (request, response) => {
  // get the user id from the token
  // create a new blog
  console.log(request.body);
  const blog = new Blog({
    title: request.body.title,
    content: request.body.content,
    image: request.body.image,
    tags: request.body.tags,
    user: request.user.userId,
  });
  console.log(blog);
  // save the blog
  blog
    .save()
    .then((blog) => {
      response.status(200).send({
        message: "Blog created successfully",
        blog,
      });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send({
        message: "Error creating blog",
        error,
      });
    });
};

const blogEdit = async (request, response) => {
  //check if the blogId is of the same user

  Blog.findOne({ _id: request.params.blogId })

    .then((blog) => {
      // update the blog
      if (blog.user != request.user.userId) {
        response.status(400).send({
          message: "You are not authorized to edit this blog",
        });
        return;
      }
      blog.title = request.body.title;
      blog.content = request.body.content;
      blog.tags = request.body.tags;
      blog.image = request.body.image;
      // save the blog
      blog.save();
      response.status(200).send({
        message: "Blog updated successfully",
      });
    })
    // catch error if password does not match
    .catch((error) => {
      response.status(400).send({
        message: "Blog not Found",
        error,
      });
    });
};

const blogsGet = async (request, response) => {
  Blog.find()
    .then((blogs) => {
      response.status(200).send({
        message: "Blogs fetched successfully",
        blogs,
      });
    })
    .catch((error) => {
      response.status(400).send({
        message: "Blogs not found",
        error,
      });
    });
};

const blogGetUser = async (request, response) => {
  Blog.find({ user: request.params.id })
    .then((blogs) => {
      response.status(200).send({
        message: "Blogs fetched successfully",
        blogs,
      });
    })
    .catch((error) => {
      response.status(400).send({
        message: "Blogs not found",
        error,
      });
    });
};
const blogGet = async (request, response) => {
  Blog.findOne({ _id: request.params.blogId })
    .then((blog) => {
      console.log(blog);
      response.status(200).send({
        message: "Blog fetched successfully",
        blog,
      });
    })
    .catch((error) => {
      response.status(400).send({
        message: "Blog not found",
        error,
      });
    });
};

module.exports = { blogCreate, blogEdit, blogGet, blogsGet, blogGetUser };
