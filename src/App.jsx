import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/contact-us" element={null} />
      </Routes>
    </Router>
  );
}

export default App;
