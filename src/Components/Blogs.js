import React from "react";

function Blogs({ blogs }) {
  console.log(blogs);
  return (
    <div className="flex gap-2">
      {blogs &&
        blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className="min-w-[150px] min-h-[100px] border-black border rounded p-4 m-5 cursor-pointer"
            >
              <h1>{blog.title}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default Blogs;
