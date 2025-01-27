import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const articles = [
    { slug: "gut-health", title: "Gut Health and Achieving an Ideal Gut Biome" },
    { slug: "hormonal-cycle-syncing", title: "The Benefits of Hormonal Cycle Syncing" },
    { slug: "diet-mental-health", title: "The Connection Between Diet and Mental Health" },
    { slug: "10-best-superfoods", title: "The 10 Best Superfoods for Your Health" },
    { slug: "popular-diets", title: "A Look at 3 Popular Diets and Their Merits" },
    // Add more articles here
  ];

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link to={`/blogs/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
