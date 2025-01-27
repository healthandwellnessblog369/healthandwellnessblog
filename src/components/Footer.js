import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer style={{ padding: "10px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
    <p>© 2025 Health and Wellness Blog. All rights reserved.</p>
    <p>
      <Link to="/privacy-policy" style={{ textDecoration: "none", color: "blue" }}>
        Privacy Policy
      </Link>
    </p>
  </footer>
);

export default Footer;
