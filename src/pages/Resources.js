import React from "react";

// Resources Component to display external health and wellness links
const Resources = () => (
  <div className="resources-container">
    <h2 className="resources-title">Resources</h2>
    <ul className="resources-list">
      {[
        {
          name: "Centers for Disease Control and Prevention (CDC)",
          url: "https://www.cdc.gov",
        },
        {
          name: "Mayo Clinic",
          url: "https://www.mayoclinic.org",
        },
        {
          name: "National Institutes of Health (NIH)",
          url: "https://www.nih.gov",
        },
        {
          name: "World Health Organization (WHO)",
          url: "https://www.who.int",
        },
        {
          name: "Healthline",
          url: "https://www.healthline.com",
        },
      ].map((resource, index) => (
        <li key={index} className="resources-list-item">
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resources-link"
          >
            {resource.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Resources;
