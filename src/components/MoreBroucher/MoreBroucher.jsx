import React from "react";
import "./MoreBroucher.css";

const MoreBroucher = () => {
  return (
    <div className="Broucher">
    <div className="Broucher-container">
      <div className="Broucher-left">
        <h2 className="Broucher-title">
          What is <span className="Broucher-highlight">ALLEN’s School <br></br> Academic Excellence Program</span>
        </h2>
        <button className="brochure-button">Download Brochure</button>
      </div>
      <div className="Broucher-right">
        <p className="Broucher-description">
          SAEP is a program that merges competitive exam preparation with the regular school
          curriculum, helping students succeed both academically and in exams like JEE & NEET.
        </p>
      </div>
    </div>
    </div>
  );
};

export default MoreBroucher;
