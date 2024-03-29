import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";

function App() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:4001/blogs");
      const json = await response.json();
      setBlogs(json);
      console.log(blogs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="Main">
      <Header />
      <Blogs blogs={blogs} />
    </div>
  );
}

export default App;
