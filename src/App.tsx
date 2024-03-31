import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogContainer from "./Components/BlogContainer";

function App() {
  return (
    <div className="Main">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<BlogContainer />} />
            <Route path="/blogs" element={<BlogContainer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
