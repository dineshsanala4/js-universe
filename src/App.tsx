import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogContainer from "./Components/BlogContainer";

function App() {
  console.log("App is ready!");

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<BlogContainer />} />
          <Route path="/blogs" element={<BlogContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
