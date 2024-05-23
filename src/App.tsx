import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogContainer from "./Components/BlogContainer";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
