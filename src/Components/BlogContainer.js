import { useEffect, useState } from "react";
import Search from "./Search";
import Blogs from "./Blogs";
import checkValidString from "../Utils/Data Structures/Examples/BalanceBraces";

function BlogContainer() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/blogs");
      const json = await response.json();
      setBlogs(json);
      // console.log(blogs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(
    'checkValidString("()") is returning -> ',
    checkValidString("()")
  );

  return (
    <>
      <Search />
      <Blogs blogs={blogs} />
    </>
  );
}

export default BlogContainer;
