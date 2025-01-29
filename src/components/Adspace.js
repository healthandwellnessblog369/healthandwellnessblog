import React, { useEffect } from "react";

const Adspace = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="adspace">
      {/* Google AdSense Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXX"  // Replace with your AdSense Publisher ID
        data-ad-slot="XXXXXXXXXX"  // Replace with your AdSense Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Amazon Associates Ad */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://www.amazon.com/dp/B07ZS3T3PM?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2NN8UGEPQAGAP&linkCode=tr1&tag=healthand0f57-20&linkId=amzn1.campaign.2NN8UGEPQAGAP_1738187052541"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY218_.jpg"
            alt="Amazon Product"
            style={{ width: "100%", maxWidth: "300px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Adspace;

https://www.amazon.com/dp/B07ZS3T3PM?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.2NN8UGEPQAGAP&linkCode=tr1&tag=healthand0f57-20&linkId=amzn1.campaign.2NN8UGEPQAGAP_1738187052541
