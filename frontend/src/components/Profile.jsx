import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Blog from "./Blog";
import { ENDPOINT } from "../utils/constants";

export default function Profile() {
  const cookies = new Cookies();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const token = cookies.get("TOKEN");
    const id = cookies.get("ID");
    const configuration = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${ENDPOINT}/api/blogs/user/${id}`,
    };
    axios(configuration)
      .then((res) => {
        setBlogs(res.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="feed">
      {blogs.map((blog) => (
        <div key={blog._id} className="blog_layout">
          <a href={`/blogs/${blog._id}`}>
            <Blog
              title={blog.title}
              content={blog.content}
              image={blog.image}
              tags={blog.tags}
              user={blog.user}
            />
          </a>
        </div>
      ))}
    </section>
  );
}
