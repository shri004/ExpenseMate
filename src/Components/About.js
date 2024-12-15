import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">

      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Effortless Financial Management at Your Fingertips
        </h1>
        <p className="primary-text">
        ExpenseMate is an intuitive finance management platform designed to streamline the tracking, splitting, and management of expenses.
        </p>
        <p className="primary-text">
        With a simple interface and real-time updates, it makes handling personal or group finances straightforward. Seamless integration with payment gateways ensures a smooth experience, allowing users to stay on top of their financial goals with ease.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
