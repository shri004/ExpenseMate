import React from "react";
import Feature1 from "../Assets/pick-meals-image.png";
import Feature2 from "../Assets/choose-image.png";
import Feature3 from "../Assets/delivery-image.png";

const Features = () => {
  const featureInfoData = [
    {
      image: Feature1,
      title: "Bill Splitting & Payments",
      text: "Effortlessly split bills and settle balances within the app using integrated payment options",
    },
    {
      image: Feature2,
      title: " Comprehensive Expense Tracking",
      text: "Track shared and personal expenses with detailed categories and visual insights",
    },
    {
      image: Feature3,
      title: "Daily Financial Updates and Tips",
      text: "Stay informed with daily finance news and personalized tips to improve your financial skills",
    },
  ];
  return (
    <div className="feature-section-wrapper">
      <div className="feature-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">Key Features of ExpenseMate</h1>
        <p className="primary-text">
        Powerful tools designed to simplify and enhance your financial management experience.
        </p>
      </div>
      <div className="feature-section-bottom">
        {featureInfoData.map((data) => (
          <div className="feature-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
