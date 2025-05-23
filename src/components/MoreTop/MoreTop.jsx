import React from "react";
import "./MoreTop.css";
import Curosal from "../Curosal/Curosal";
const curosalIamages = [
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742391937/dhy1ojr6prgkg8cpysxy.png?_upload_ref=ic_img_tool&__ar__=1.96",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742391937/qegfkqoismcz5xpyxckv.png?_upload_ref=ic_img_tool&__ar__=1.96",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742391937/czv5j7qdvzddoqijxerl.png?_upload_ref=ic_img_tool&__ar__=1.96",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742391937/qyomvtdqsfjavjlb8cqz.png?_upload_ref=ic_img_tool&__ar__=1.96"
    ]

const MoreTop = () => {
  return (
    <div className="More-container">
      <div className="More-content">
        <div className="More-left">
          <h1 className="More-heading">At ALLEN for Schools</h1>
          <h2 className="More-subheading">
            We nurture talen<span className="cursor-pipe">|</span>
          </h2>
          <p className="More-description">
            Empower students to succeed in school & competitive exams at your school!
          </p>
          <div className="More-stats">
            <div>
              <h3>36+</h3>
              <p>years of teaching</p>
            </div>
            <div>
              <h3>30 lakh+</h3>
              <p>students mentored</p>
            </div>
            <div>
              <h3>7,400+</h3>
              <p>top-notch faculty</p>
            </div>
          </div>
        </div>

        
        <div className="More-right">

        </div>
      </div>
      <div className="More-curosal">
        <Curosal images={curosalIamages}/>
      </div>
    </div>
  );
};

export default MoreTop;
