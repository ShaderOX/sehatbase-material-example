import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./config";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
