import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { ENDPOINT } from "../utils/constants";

const BlogPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [ID, setID] = useState("");
  console.log(params.blogId);
  console.log(ID);
  const cookies = new Cookies();
  useEffect(() => {
    const configuration = {
      method: "GET",
      url: `${ENDPOINT}/api/blogs/blogs/${params.blogId}`,
    };
    axios(configuration)
      .then((res) => {
        console.log(res.data.blog.user);
        setID(cookies.get("ID"));
        setBlog(res.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-2xl mt-8 mx-auto">
      {ID === blog.user && (
        <div className="flex mb-4 ">
          <a href={`/edit/${blog._id}`}>
            <button className="outline_btn mr-4">Edit</button>
          </a>
          <button className="outline_btn bg-red-800">Delete</button>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags &&
          blog.tags.map((tag, index) => (
            <button
              key={index}
              className="px-2 py-1 bg-gray-200 rounded text-sm"
            >
              {tag}
            </button>
          ))}
      </div>
      {blog.image && <img src={blog.image} alt="Blog" className="mb-4" />}
      <p className="mb-4">{blog.content}</p>
      {/* Add additional components or sections here */}
    </div>
  );
};

export default BlogPage;
