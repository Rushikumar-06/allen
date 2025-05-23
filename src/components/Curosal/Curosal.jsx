import {useState,useEffect} from 'react';
import "./Curosal.css";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
function Curosal({images}){
    const [currentIndex, setCurrentIndex] = useState(0);
    function handleNext(){
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    function handlePrev(){
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return(
        <>
        <div className="carousel-controls" >
        <button onClick={handlePrev}  className='Curousal-left-btn-container'><FaArrowLeft className='Curousal-left-btn' /></button>
         <img src={images[currentIndex]} alt="Carousel"  />
        <button onClick={handleNext}  className='Curousal-right-btn-container'><FaArrowRight className="Curousal-right-btn"/></button>
      </div>
      <div className="Curosal-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`Curosal-dot ${index === currentIndex ? "Curosal-active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
        </>
    )
}
export default Curosal;