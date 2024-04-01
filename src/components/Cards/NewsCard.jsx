import React from "react";
import ROHIT from "../../assets/images/pandya_rohit.avif";
import BUM from "../../assets/images/jasprit_bumrah.avif";
import MAHI from "../../assets/images/thala.webp";
import "./NewsCard.css"; // Import the CSS file for styling

const NewsCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="name">RR VS MUM: Bumrah</h2>
      <div className="news-section">
        <div>
          <img src={BUM} alt="MAHI" className="news-image" />
        </div>
        <div className="news-content">
          <h1 className="text-3xl text-black font-bold mb-2"> IPL 2024, MI vs RR Strategic Corner - Why Bumrah Could Be Dangerous For RR? </h1>
          <p className="text-lg text-gray-600"> The Mumbai Indians will be playing against the Rajasthan Royals in the 14th match of the IPL 2024. Jasprit Bumrah could  </p>
        </div>
      </div>
      <hr className="news-divider" />
      <h2 className="name">Chawla about Hardik</h2>
      <div className="news-section">
        <div>
          <img src={ROHIT} alt="BUM" className="news-image" />
        </div>
        <div className="news-content">
          <h1 className="text-3xl text-black font-bold mb-2"> 'Can't Really Help...' - MI Insider Breaks Silence On Pandya-Rohit Sharma Controversy </h1>
          <p className="text-lg text-gray-600">Piyush Chawla, a spinner for Mumbai Indians, told the Indian Express that Hardik Pandya doesn't let crowd booing bother </p>
        </div>
      </div>
      <hr className="news-divider" />
      <h2 className="name">MS Dhoni 300 wickets in T20s</h2>
      <div className="news-section">
        <div>
          <img src={MAHI} alt="ROHIT" className="news-image" />
        </div>
        <div className="news-content">
          <h1 className="text-3xl text-black font-bold mb-2"> IPL 2024 Record Alert: MS Dhoni Becomes First Keeper With 300 Dismissals In T20s </h1>        
         <p className="text-lg text-gray-600"> Legendary former India captain MS Dhoni scripted history during the recent CSK vs DC matchup in IPL 2024, bagging his 30 </p>
         
        </div>
      </div>
      <hr className="news-divider" />
<div className="read-more">Read More</div>
    </div>
  );
}

export default NewsCard;
