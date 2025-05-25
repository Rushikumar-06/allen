import './Tallentext.css';
import { FaBolt, FaMedal, FaClock } from 'react-icons/fa';

const Tallentext = () => {
  return (
    
    <div className="tallentex-container">
      <h2 className="tallentex-title">
        <span className="blue-text">TALLENTEX</span> for ALLEN Online –
        <br />
        Scholarships, cash rewards & more!
      </h2>

      <div className="tallentex-points">
        <div className="tallentex-point">
          <FaBolt className="tallentex-icon" />
          <p>
            Gives an early start to students aiming for future <br /> competitive exams
          </p>
        </div>
        <div className="tallentex-point">
          <FaMedal className="tallentex-icon" />
          <p>
            Nurtures young talent with scholarships, cash rewards & more
          </p>
        </div>
        <div className="tallentex-point">
          <FaClock className="tallentex-icon" />
          <p>
            2-hour online test (in English) for class 5–10 students
          </p>
        </div>
      </div>
    </div>
   
    
  );
};

export default Tallentext;
