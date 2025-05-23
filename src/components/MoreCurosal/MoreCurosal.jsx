import React, { useState ,useEffect} from "react";
import "./MoreCurosal.css";


const MoreCurosal = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
          const interval = setInterval(() => {
              nextSlide();
          }, 3000);
          return () => clearInterval(interval);
      }, []);
  return (
    <div className="MoreCurosal">
        <h1 className="MoreCurosal-title">Post class ALLEN experience</h1>
    <div className="MoreCurosal-container">
      <button className="MoreCurosal-arrow MoreCurosal-left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="MoreCurosal-slide">
        <div className="MoreCurosal-slide-image">
          <img src={slides[currentIndex].image} alt="Slide" />
        </div>
        <div className="MoreCurosal-slide-text">
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      <button className="MoreCurosal-arrow MoreCurosal-right" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="MoreCurosal-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`MoreCurosal-dot ${index === currentIndex ? "MoreCurosal-active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MoreCurosal;
