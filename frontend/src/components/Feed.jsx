import { useEffect, useState } from "react";
import Blog from "./Blog";
import axios from "axios";

export default function Feed() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const configuration = {
      method: "GET",
      url: "http://localhost:8000/api/blogs",
    };
    axios(configuration).then((res) => {
      setData(res.data.blogs);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((blog) => (
        <div
          key={blog._id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
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
    </div>

    // <section className="feed">
    //   {data.map((blog) => (
    //     <div key={blog._id} className="blog_layout">
    //       <a href={`/blogs/${blog._id}`}>
    //         <Blog
    //           title={blog.title}
    //           content={blog.content}
    //           image={blog.image}
    //           tags={blog.tags}
    //           user={blog.user}
    //         />
    //       </a>
    //     </div>
    //   ))}
    // </section>
  );
}
