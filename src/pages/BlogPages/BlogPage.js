import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const articles = {
    "gut-health": {
      title: "Gut Health and Achieving an Ideal Gut Biome",
      image: "/images/gut_health.png",
      sections: [
        {
          content: `Gut health plays a pivotal role in overall well-being, as the gut biome—the community of trillions of microorganisms in your digestive system—affects everything from digestion to immunity and mental health.`,
          adSpace: true,
        },
        {
          content: `A healthy gut biome is diverse and balanced, which helps the body effectively break down food, absorb nutrients, and maintain a robust immune system. To cultivate an ideal gut biome, focus on incorporating a diet rich in fiber, fruits, vegetables, and fermented foods like yogurt, kimchi, and sauerkraut.`,
          adSpace: true,
        },
        {
          content: `Equally important is avoiding processed foods, excessive sugar, and artificial sweeteners, as they can disrupt the gut microbiome. Hydration also plays a critical role in keeping the digestive system functioning smoothly.`,
          adSpace: true,
        },
        {
          content: `Regular exercise and adequate sleep further support gut health by reducing stress, which can negatively impact gut bacteria.`,
          adSpace: true,
        },
      ],
    },
    "hormonal-cycle-syncing": {
      title: "The Benefits of Hormonal Cycle Syncing",
      image: "/images/ovaries.png",
      sections: [
        {
          content: `Hormonal cycle syncing is a wellness approach that aligns your diet, exercise, and lifestyle habits with the natural phases of your menstrual cycle. This practice acknowledges the hormonal fluctuations women experience throughout the month and leverages them to optimize energy, mood, and overall health.`,
          adSpace: true,
        },
        {
          content: `By understanding the four phases of the menstrual cycle—menstrual, follicular, ovulatory, and luteal—you can tailor your activities and nutrition to work with your body rather than against it.`,
          adSpace: true,
        },
        {
          content: `Cycle syncing can also improve hormonal balance by reducing stress on the body, which in turn can help alleviate symptoms of PMS. It encourages mindful living by fostering a deeper connection with your body’s natural rhythms.`,
          adSpace: true,
        },
        {
          content: `Moreover, syncing your lifestyle with your cycle may improve long-term health by reducing the risk of hormonal imbalances and related conditions, such as polycystic ovary syndrome (PCOS) or endometriosis.`,
          adSpace: true,
        },
      ],
    },
    "diet-mental-health": {
      title: "The Connection Between Diet and Mental Health",
      image: "/images/mental_health.png",
      sections: [
        {
          content: `The connection between diet and mental health is becoming increasingly evident as research highlights the profound impact of nutrition on brain function and emotional well-being.`,
          adSpace: true,
        },
        {
          content: `A well-balanced diet provides the brain with essential nutrients, such as omega-3 fatty acids, B vitamins, and antioxidants, which are critical for maintaining optimal cognitive performance and mood regulation.`,
          adSpace: true,
        },
        {
          content: `Conversely, a diet high in processed foods, sugars, and unhealthy fats has been linked to increased rates of depression and anxiety. These foods can disrupt gut health, leading to an imbalance in the gut microbiome, which plays a key role in communicating with the brain through the gut-brain axis.`,
          adSpace: true,
        },
        {
          content: `Furthermore, hydration is often overlooked but essential for mental clarity and focus. Even mild dehydration can impair mood and cognitive performance.`,
          adSpace: true,
        },
      ],
    },
    "10-best-superfoods": {
        title: "The 10 Best Superfoods for Your Health",
        image: "/images/superfoods.png",
        sections: [
            {
            content: `Superfoods are nutrient-dense foods that provide a wealth of health benefits, often in small servings. Here are ten of the best superfoods to consider adding to your diet:`,
            adSpace: false,
            },
            {
            content: `1. **Blueberries**: Packed with antioxidants, they help combat inflammation and support brain health.`,
            adSpace: false,
            },
            {
            content: `2. **Kale**: A leafy green rich in vitamins A, C, and K, as well as calcium for bone health.`,
            adSpace: true,
            },
            {
            content: `3. **Salmon**: A fatty fish high in omega-3 fatty acids, which are essential for heart and brain health.`,
            adSpace: false,
            },
            {
            content: `4. **Quinoa**: A protein-rich grain that's gluten-free and contains all nine essential amino acids.`,
            adSpace: true,
            },
            {
            content: `5. **Chia Seeds**: These tiny seeds are loaded with fiber, omega-3s, and antioxidants.`,
            adSpace: false,
            },
            {
            content: `6. **Avocados**: A source of healthy fats, potassium, and vitamin E, great for skin and heart health.`,
            adSpace: true,
            },
            {
            content: `7. **Sweet Potatoes**: Packed with beta-carotene and fiber, they support eye health and digestion.`,
            adSpace: false,
            },
            {
            content: `8. **Turmeric**: A spice with powerful anti-inflammatory and antioxidant properties due to curcumin.`,
            adSpace: true,
            },
            {
            content: `9. **Green Tea**: A beverage rich in catechins, which help boost metabolism and protect cells.`,
            adSpace: false,
            },
            {
            content: `10. **Almonds**: A convenient snack full of healthy fats, protein, and vitamin E.`,
            adSpace: true,
            },
        ],
        },

    "popular-diets": {
      title: "A Look at 3 Popular Diets and Their Merits",
      image: "/images/diet.png",
      sections: [
        {
          content: `With so many diet options available, it can be overwhelming to decide which is best for you. Here’s a brief overview of three very popular diets and their merits:`,
          adSpace: false,
        },
        {
          content: `1. **Mediterranean Diet**: This diet emphasizes whole grains, lean proteins (like fish), healthy fats (such as olive oil), and a variety of fruits and vegetables. It's been linked to improved heart health, reduced inflammation, and better cognitive function, making it one of the most well-researched and widely recommended diets.`,
          adSpace: true,
        },
        {
          content: `2. **Keto Diet**: The ketogenic diet focuses on high fat, moderate protein, and very low carbohydrates, pushing the body into a state of ketosis where it burns fat for energy.`,
          adSpace: true,
        },
        {
          content: `3. **Plant-Based Diet**: This diet focuses on consuming mostly or entirely plant-derived foods like fruits, vegetables, legumes, and nuts. It's praised for its environmental benefits, support for weight management, and reduced risk of chronic illnesses.`,
          adSpace: true,
        },
      ],
    },
  };



  const BlogPage = () => {
    const { slug } = useParams();
    const article = articles[slug];

    if (!article) {
      return <p className="content-not-found">Article not found</p>;
    }

    return (
        <div className="blog-container">
          <Helmet>
            <title>{article.title} | Health and Wellness Blog</title>
            <meta
              name="description"
              content={
                article.metaDescription ||
                `Read more about ${article.title} and explore our health and wellness resources.`
              }
            />
          </Helmet>
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
