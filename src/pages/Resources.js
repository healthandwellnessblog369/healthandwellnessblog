import React from "react";

const Resources = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
    <h2 style={{ color: "#333", marginBottom: "20px" }}>Resources</h2>
    <ul style={{ listStyleType: "none", padding: "0" }}>
      <li style={{ marginBottom: "10px" }}>
        <a
          href="https://www.cdc.gov"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}
        >
          Centers for Disease Control and Prevention (CDC)
        </a>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <a
          href="https://www.mayoclinic.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}
        >
          Mayo Clinic
        </a>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <a
          href="https://www.nih.gov"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}
        >
          National Institutes of Health (NIH)
        </a>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <a
          href="https://www.who.int"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}
        >
          World Health Organization (WHO)
        </a>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <a
          href="https://www.healthline.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#007bff", fontSize: "16px" }}
        >
          Healthline
        </a>
      </li>
    </ul>
  </div>
);

export default Resources;
