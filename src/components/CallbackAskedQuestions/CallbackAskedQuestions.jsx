import React from 'react'
import { useState } from 'react';
import './CallbackAskedQuestions.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";



function CallbackAskedQuestions({faqData}) {
    

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="askedQuestiion-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          className={'askedQuestiion-item '}
          key={index}
          onClick={() => toggle(index)}
        >
          <div className="askedQuestiion-question">
            {item.question}
            <span className="askedQuestiion-arrow">{activeIndex === index ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
          </div>
          {activeIndex === index && (
            <div className="askedQuestiion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );

}

export default CallbackAskedQuestions
