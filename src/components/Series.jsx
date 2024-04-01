import React from "react";
import GU from "../assets/images/1GU.avif";
import H2 from "../assets/images/1H2.avif";
import ID from "../assets/images/1ID.avif";
import IE from "../assets/images/1IE.avif";
import IR from "../assets/images/1IR.avif";
import IW from "../assets/images/1IW.avif";
import JF from "../assets/images/1JF.avif";
import K1 from "../assets/images/1K1.avif";
import X2 from "../assets/images/2X.webp";

export const Series = () => {
  const containerStyle = {
    display: "flex",
    backgroundColor: "rgb(17 24 39)", // Set your desired background color here
    gap: "30px", // Set the desired space between images
    padding: "30px", // Adjust padding as needed
    alignItems: "center", // Center items vertically
    justifyContent: "center", // Center items horizontally
    marginBottom: "405px", // Add margin bottom to create space
  };

  const imageStyle = {
    width: "100px", // Set the fixed width
    height: "119px", // Set the fixed height
  };

  return (
    <div style={containerStyle}>
      <img src={GU} alt="GU" style={imageStyle} />
      <img src={H2} alt="H2" style={imageStyle} />
      <img src={ID} alt="ID" style={imageStyle} />
      <img src={IE} alt="IE" style={imageStyle} />
      <img src={IR} alt="IR" style={imageStyle} />
      <img src={IW} alt="IW" style={imageStyle} />
      <img src={JF} alt="JF" style={imageStyle} />
      <img src={K1} alt="K1" style={imageStyle} />
      {/* <img src={X2} alt="X2" style={imageStyle} /> */}
    </div>
  );
};

export default Series;
