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
import { Helmet } from "react-helmet";
import NotFound from "./pages/NotFound";
import TermsOfUse from "./pages/TermsOfUse";
import AffiliateLinksNotice from "./pages/AffiliateLinksNotice";

const App = () => (
  <>
    <Helmet>
      <title>Health and Wellness Blog</title>
      <meta
        name="description"
        content="Explore articles and resources about health, wellness, and lifestyle."
      />
    </Helmet>
    <Router>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <div style={{ display: "flex", flex: 1 }}>
          {/* Left-Side Ads */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              width: "150px",
              padding: "10px",
            }}
          >
            <Adspace />
            <Adspace />
            <Adspace />
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, padding: "10px" }} className="content">
            <Tabs />
            <Routes>
              <Route path="/" element={<Blogs />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/affiliate-links-notice" element={<AffiliateLinksNotice />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Right-Side Ads */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              width: "150px",
              padding: "10px",
            }}
          >
            <Adspace />
            <Adspace />
            <Adspace />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  </>
);

export default App;
