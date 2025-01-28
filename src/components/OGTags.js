import React from "react";
import { Helmet } from "react-helmet";

const OGTags = ({
    type = "website",
    title = "Health and Wellness Blog",
    description = "Explore health and wellness tips, recipes, and resources for a balanced life.",
    image = "https://famous-lily-9413b2.netlify.app/images/favico.png",
    url = "https://famous-lily-9413b2.netlify.app",
  }) => {
    return (
      <Helmet>
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Health and Wellness Blog" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  };


export default OGTags;
