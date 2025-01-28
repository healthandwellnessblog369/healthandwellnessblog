import React from "react";
import { Link } from "react-router-dom";

// Blogs Component
const Blogs = () => {
  // Define the list of articles with slug and title
  const articles = [
    { slug: "gut-health", title: "Gut Health and Achieving an Ideal Gut Biome" },
    { slug: "hormonal-cycle-syncing", title: "The Benefits of Hormonal Cycle Syncing" },
    { slug: "diet-mental-health", title: "The Connection Between Diet and Mental Health" },
    { slug: "10-best-superfoods", title: "The 10 Best Superfoods for Your Health" },
    { slug: "popular-diets", title: "A Look at 3 Popular Diets and Their Merits" },
  ];

  return (
    <div className="container">
      {/* Heading for the blogs section */}
      <h2 className="blogs-heading">Blogs</h2>

      {/* List of blog links */}
      <ul className="blogs-list">
        {articles.map((article) => (
          <li key={article.slug} className="blogs-list-item">
            <Link
              to={`/blogs/${article.slug}`}
              className="blogs-link"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
