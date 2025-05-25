import React from 'react';
import './TallentexBenefits.css';
import { FaArrowRight } from 'react-icons/fa';

const benefits = [
  {
    icon: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116122/ersus5s9krkc7mu6cro5.svg?_upload_ref=ic_img_tool&__ar__=1.08',
    title: 'National Ranks',
    description: 'Get an all-India rank and detailed subject-wise performance report to know where you stand.',
  },
  {
    icon: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116175/emruhvtgjleqasb0dzt5.svg?_upload_ref=ic_img_tool&__ar__=1.00',
    title: 'Competitive Success Index',
    description: 'Gauge your future potential in JEE, NEET, Olympiads, and other key competitive exams.',
  },
  {
    icon: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116221/as5dgb9cbxgzvinucykk.svg?_upload_ref=ic_img_tool&__ar__=1.00',
    title: 'Exciting Rewards',
    description: 'Win from ₹1.25 Cr worth of cash prizes & up to 90% scholarship on ALLEN Online Courses.',
  },
  {
    icon: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116271/e3gajzl9dn6qk4p2gwij.svg?_upload_ref=ic_img_tool&__ar__=1.00',
    title: 'Early Competitive Edge',
    description: 'Experience real exam patterns early and build the mindset for future competitive success.',
  },
];

const TallentexBenefits = () => {
  return (
    <div className="benefits-container">
      <h2>Benefits of TALLENTEX</h2>
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-item" key={index}>
            <img src={item.icon} alt={item.title} className="benefit-icon" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="benefits-rewards-button">
        View cash rewards for every rank <FaArrowRight />
      </button>
    </div>
  );
};

export default TallentexBenefits;
