import React from "react";
import { useParams } from "react-router-dom";

const articles = {


    "gut-health": {
      title: "Gut Health and Achieving an Ideal Gut Biome",
      content: `
        Gut health plays a pivotal role in overall well-being, as the gut biome—the community of trillions of microorganisms in your digestive system—affects everything from digestion to immunity and mental health. A healthy gut biome is diverse and balanced, which helps the body effectively break down food, absorb nutrients, and maintain a robust immune system. To cultivate an ideal gut biome, focus on incorporating a diet rich in fiber, fruits, vegetables, and fermented foods like yogurt, kimchi, and sauerkraut. These foods provide prebiotics and probiotics that nourish beneficial bacteria and help maintain balance.
        Equally important is avoiding processed foods, excessive sugar, and artificial sweeteners, as they can disrupt the gut microbiome. Hydration also plays a critical role in keeping the digestive system functioning smoothly. Regular exercise and adequate sleep further support gut health by reducing stress, which can negatively impact gut bacteria.
      `,
    },


    "hormonal-cycle-syncing": {
      title: "The Benefits of Hormonal Cycle Syncing",
      content: `
        Hormonal cycle syncing is a wellness approach that aligns your diet, exercise, and lifestyle habits with the natural phases of your menstrual cycle. This practice acknowledges the hormonal fluctuations women experience throughout the month and leverages them to optimize energy, mood, and overall health. By understanding the four phases of the menstrual cycle—menstrual, follicular, ovulatory, and luteal—you can tailor your activities and nutrition to work with your body rather than against it.  During the menstrual phase, the body benefits from rest and nutrient-dense foods that replenish iron and support recovery. In the follicular phase, as energy levels rise, it’s a great time to incorporate high-intensity workouts and focus on creative tasks. The ovulatory phase, often considered the peak of energy and confidence, is ideal for social activities and collaborative work. Finally, the luteal phase requires more self-care, as hormonal changes can lead to fatigue; gentle exercise, like yoga, and comfort foods rich in magnesium can be especially helpful.
        Cycle syncing can also improve hormonal balance by reducing stress on the body, which in turn can help alleviate symptoms of PMS. It encourages mindful living by fostering a deeper connection with your body’s natural rhythms. Many women find that this approach not only enhances physical health but also supports emotional well-being by minimizing energy crashes and mood swings.  Moreover, syncing your lifestyle with your cycle may improve long-term health by reducing the risk of hormonal imbalances and related conditions, such as polycystic ovary syndrome (PCOS) or endometriosis. The key to successful cycle syncing is awareness—tracking your cycle and understanding your body’s needs at each stage. By embracing this personalized approach, you can feel more in control, empowered, and aligned with your body’s natural rhythms.
      `,
    },

    
    "diet-mental-health": {
    title: "The Connection Between Diet and Mental Health",

    content: `
      The connection between diet and mental health is becoming increasingly evident as research highlights the profound impact of nutrition on brain function and emotional well-being. A well-balanced diet provides the brain with essential nutrients, such as omega-3 fatty acids, B vitamins, and antioxidants, which are critical for maintaining optimal cognitive performance and mood regulation. Diets rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce inflammation and support neurotransmitter production, both of which are vital for mental health.
      Conversely, a diet high in processed foods, sugars, and unhealthy fats has been linked to increased rates of depression and anxiety. These foods can disrupt gut health, leading to an imbalance in the gut microbiome, which plays a key role in communicating with the brain through the gut-brain axis. Studies have shown that improving gut health through a diet rich in probiotics and prebiotics can enhance mood and cognitive function.
      Stable blood sugar levels are another critical factor in managing mental health. Consuming complex carbohydrates and fiber helps maintain steady glucose levels, reducing mood swings and irritability. In contrast, diets that rely heavily on refined carbohydrates and sugary snacks can cause energy crashes and exacerbate symptoms of anxiety and depression.
      Furthermore, hydration is often overlooked but essential for mental clarity and focus. Even mild dehydration can impair mood and cognitive performance. Additionally, magnesium-rich foods, such as leafy greens and nuts, have been shown to reduce stress and promote relaxation.
      In summary, a nutritious diet is not just important for physical health but also a cornerstone of mental well-being. By making mindful dietary choices, individuals can support brain function, enhance mood stability, and foster resilience against mental health challenges.
    `,
  },


  "10-best-superfoods": {
    title: "The 10 Best Superfoods for Your Health",
    content: `
      Superfoods are nutrient-dense foods that provide a wealth of health benefits, often in small servings. Here are ten of the best superfoods to consider adding to your diet:

      1. **Blueberries**: Packed with antioxidants, they help combat inflammation and support brain health.
      2. **Kale**: A leafy green rich in vitamins A, C, and K, as well as calcium for bone health.
      3. **Salmon**: A fatty fish high in omega-3 fatty acids, which are essential for heart and brain health.
      4. **Quinoa**: A protein-rich grain that's gluten-free and contains all nine essential amino acids.
      5. **Chia Seeds**: These tiny seeds are loaded with fiber, omega-3s, and antioxidants.
      6. **Avocados**: A source of healthy fats, potassium, and vitamin E, great for skin and heart health.
      7. **Sweet Potatoes**: Packed with beta-carotene and fiber, they support eye health and digestion.
      8. **Turmeric**: A spice with powerful anti-inflammatory and antioxidant properties due to curcumin.
      9. **Green Tea**: A beverage rich in catechins, which help boost metabolism and protect cells.
      10. **Almonds**: A convenient snack full of healthy fats, protein, and vitamin E.

      Incorporating these superfoods into your meals can help improve your overall health, boost energy, and protect against chronic diseases. Remember, balance is key—superfoods work best as part of a well-rounded diet.
    `,
  },


  "popular-diets": {
    title: "A Look at 3 Popular Diets and Their Merits",
    content: `
      With so many diet options available, it can be overwhelming to decide which is best for you. Here’s a brief overview of three very popular diets and their merits:
      1. **Mediterranean Diet**: This diet emphasizes whole grains, lean proteins (like fish), healthy fats (such as olive oil), and a variety of fruits and vegetables. It's been linked to improved heart health, reduced inflammation, and better cognitive function, making it one of the most well-researched and widely recommended diets.
      2. **Keto Diet**: The ketogenic diet focuses on high fat, moderate protein, and very low carbohydrates, pushing the body into a state of ketosis where it burns fat for energy. While it can lead to rapid weight loss and improved blood sugar control, it may not be sustainable for everyone due to its restrictive nature.
      3. **Plant-Based Diet**: This diet focuses on consuming mostly or entirely plant-derived foods like fruits, vegetables, legumes, and nuts. It's praised for its environmental benefits, support for weight management, and reduced risk of chronic illnesses. However, ensuring adequate protein and vitamin B12 intake is crucial.
      Each of these diets has its unique benefits, and the best choice depends on your health goals, lifestyle, and personal preferences. Consulting with a nutritionist can help you determine which diet aligns with your needs.
    `,
  },
};


const BlogPage = () => {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default BlogPage;
