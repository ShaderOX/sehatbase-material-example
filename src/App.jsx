import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./config";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetailPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
