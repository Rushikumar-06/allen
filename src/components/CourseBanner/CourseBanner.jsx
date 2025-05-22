
import './CourseBanner.css'; 

function Banner(){
  return (
    <div className='banner-container'>
    <div className="banner">
      <span className="highlight">LAST FEW SEATS LEFT!</span>
      <span className="text"> Batches for LIVE courses starting from </span>
      <span className="date">27th May</span>
    </div>
    </div>
  );
};

export default Banner;