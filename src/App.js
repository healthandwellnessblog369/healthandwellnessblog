import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPages/BlogPage";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Adspace from "./components/Adspace";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => (
  <Router>
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Adspace />
        <div style={{ flex: 1, padding: "10px" }}>
          <Tabs />
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Adspace />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
