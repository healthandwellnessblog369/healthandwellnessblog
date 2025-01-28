import React from "react";
import { Link } from "react-router-dom";

// Footer component to display site footer information
const Footer = () => (
  <footer
    style={{
      padding: "10px",
      backgroundColor: "#f4f4f4",
      textAlign: "center",
    }}
  >
    {/* Copyright information */}
    <p>© 2025 Health and Wellness Blog. All rights reserved.</p>

    {/* Link to the Privacy Policy page */}
    <p>
      <Link
        to="/privacy-policy"
        style={{ textDecoration: "none", color: "blue" }}
      >
        Privacy Policy
      </Link>
      <Link
        to="/terms-of-use"
        style={{ textDecoration: "none", color: "blue" }}
      >
        Terms Of Use
      </Link>
      <Link
        to="/affiliate-links-notice"
        style={{ textDecoration: "none", color: "blue" }}
      >
        Notice of Use of Affiliate Links and Paid Advertising
      </Link>
    </p>
  </footer>
);

export default Footer;
