import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import articles from "./articles";
import OGTags from "../../components/OGTags";



const BlogPage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return <p className="content-not-found">Article not found</p>;
  }

  return (
    <div className="blog-container">
      {/* Open Graph and Twitter Meta Tags */}
      <OGTags
        type="article"
        title={article.title}
        description={
          article.metaDescription ||
          `Read more about ${article.title} and explore our health and wellness resources.`
        }
        image={article.image || "https://famous-lily-9413b2.netlify.app/images/favico.png"}
        url={`https://famous-lily-9413b2.netlify.app/${article.slug}`} // Adjust URL dynamically
      />

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
            "image": article?.image || "https://famous-lily-9413b2.netlify.app/images/favico.png",
            "publisher": {
              "@type": "Organization",
              "name": "Health and Wellness Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://famous-lily-9413b2.netlify.app/images/favico.png", // Update with your logo URL
              },
            },
            "description":
              article?.metaDescription || `Read about ${article.title}.`,
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
              <div>
                <a
                  href="https://www.amazon.com/dp/B07ZS3T3PM?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2NN8UGEPQAGAP&linkCode=tr1&tag=healthand0f57-20&linkId=amzn1.campaign.2NN8UGEPQAGAP_1738187052541"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://m.media-amazon.com/images/I/71YO-q1eS-L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    alt="Amazon Product"
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
