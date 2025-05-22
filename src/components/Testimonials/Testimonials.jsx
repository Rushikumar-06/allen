import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "SARTH PATIL",
    course: "NEET-UG 2024, Score",
    score: "710/720",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Sarth-128x128_wrp1pw.webp",
    text:
      "I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.",
  },
  {
    name: "SEKH GALIB RAZA",
    course: "NEET-UG 2024, Score",
    score: "690/720",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Galib-128x128_1_ktw4sw.webp",
    text:
      "I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience helped me improve my score.",
  },
  {
    name: "AVIK DAS",
    course: "JEE Adv. 2024, AIR 69",
    score: "",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Avik-128x128_vbkt1r.webp",
    text:
      "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
  },
  {
    name: "SHIFA FATIMA",
    course: "NEET-UG 2024, Score",
    score: "696/720",
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Shifa-128x128_yjuigd.webp",
    text:
      "I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as they are based mainly on NCERT and cover almost all types of NEET questions.",
  },
];

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCards < testimonials.length ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="testimonials-carousel-wrapper">
      <h2 className="testimonials-carousel-heading">Testimonials from our students</h2>
      <div className="testimonials-carousel-controls">
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <div className="testimonials-carousel-track">
        {testimonials
          .slice(startIndex, startIndex + visibleCards)
          .map((item, index) => (
            <div key={index} className="testimonial-card">
              <img src="https://allen.in/quotes.svg" className="quote-icon"/>
              <p>{item.text}</p>
              <div className="testimonials-student-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <small>{item.course}</small>
                  {item.score && <div>{item.score}</div>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
