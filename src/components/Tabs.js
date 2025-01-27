import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => (
  <nav style={{ display: "flex", justifyContent: "center", padding: "10px", backgroundColor: "#ddd" }}>
    <Link to="/" style={{ margin: "0 10px" }}>Blogs</Link>
    <Link to="/resources" style={{ margin: "0 10px" }}>Resources</Link>
    <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
  </nav>
);

export default Tabs;
