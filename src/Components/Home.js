import React from "react";
import BannerImage from "../Assets/home-banner-image-new.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            A Comprehensive Finance and Expense Management System
          </h1>
          <p className="primary-text">
          Effortlessly track, split, and manage your finances, all in one seamless solution.
          </p>
          <button className="secondary-button">
            Login <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
