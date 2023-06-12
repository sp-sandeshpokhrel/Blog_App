import React, { useState } from "react";
import FormBlog from "./BlogForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!title || !content) {
      alert("Please fill in Title and Content field");
      return;
    }

    // Prepare the blog data for API call
    const configuration = {
      method: "POST",
      url: "http://localhost:8000/api/blogs/create",
      data: {
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
        image,
        content,
      },
      headers: {
        Authorization: `Bearer ${cookies.get("TOKEN")}`,
      },
    };
    axios(configuration)
      .then((res) => {
        console.log("Blog Created Successfully");
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
      <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
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
        type={"Create"}
      />
    </div>
  );
};

export default CreateBlog;
