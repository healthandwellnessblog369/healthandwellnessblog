import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "./articles";

const BlogPage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return <p className="content-not-found">Article not found</p>;
  }

  return (
    <div className="blog-container">
      {/* Update the page title and meta description dynamically */}
      <Helmet>
        <title>{article.title} | Health and Wellness Blog</title>
        <meta
          name="description"
          content={
            article.metaDescription ||
            `Read more about ${article.title} and explore our health and wellness resources.`
          }
        />
        {/* Add structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article?.title || "Default Title",
            "author": "Health and Wellness Blog",
            "datePublished": "2025-01-27", // Replace dynamically if needed
            "image": article?.image || "https://example.com/default-image.jpg"
            "publisher": {
              "@type": "Organization",
              "name": "Health and Wellness Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://example.com/logo.png", // Update with your logo URL
              },
            },
            "description": article?.metaDescription || `Read about ${article.title}.`,
          })}
        </script>
      </Helmet>

      {/* Blog content */}
      <h1 className="blog-title">{article.title}</h1>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="blog-image"
        />
      )}
      {article.sections.map((section, index) => (
        <div key={index} className="blog-section">
          <p className="blog-content">{section.content}</p>
          {section.image && (
            <img
              src={section.image}
              alt={`Section ${index + 1}`}
              className="section-image"
            />
          )}
          {section.adSpace && (
            <div className="adspace-mobile">
              <p>Ad Space</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
