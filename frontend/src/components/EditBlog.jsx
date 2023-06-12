import React, { useEffect, useState } from "react";
import FormBlog from "./BlogForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const EditBlog = () => {
  const params = useParams();
  const cookies = new Cookies();
  const navigate = useNavigate();
  console.log(params.blogId);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const configuration = {
      method: "GET",
      url: `http://localhost:8000/api/blogs/blogs/${params.blogId}`,
    };
    axios(configuration)
      .then((res) => {
        setTitle(res.data.blog.title);
        setTags(res.data.blog.tags);
        setImage(res.data.blog.image);
        setContent(res.data.blog.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!title || !content) {
      alert("Please fill in Title and Content field");
      return;
    }

    // Prepare the blog data for API call
    let tagg = [];
    try {
      tagg = tags.split(",").map((tag) => tag.trim());
    } catch (err) {
      console.log(err);
    }
    const configuration = {
      method: "POST",
      url: `http://localhost:8000/api/blogs/edit/${params.blogId}`,
      data: {
        title,
        tags: tagg,
        image,
        content,
      },
      headers: {
        Authorization: `Bearer ${cookies.get("TOKEN")}`,
      },
    };
    axios(configuration)
      .then((res) => {
        console.log("Blog Updated Successfully");
        return navigate("/");
      })
      .catch((err) => {
        err = new Error(err);
        return;
      });
    // Make API call here using fetch or axios
    // Example: axios.post('/api/blogs', blogData)
    // You can handle the success and error cases accordingly

    // Reset the form after submission
    setTitle("");
    setTags("");
    setImage("");
    setContent("");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Edit Blog</h1>
      <FormBlog
        title={title}
        setTitle={setTitle}
        tags={tags}
        setTags={setTags}
        image={image}
        setImage={setImage}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        type={"Edit"}
      />
    </div>
  );
};

export default EditBlog;
