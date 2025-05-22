
import './CourseBanner.css'; 

function Banner({link}){
  return (
    <div className='banner-container'>
      <img className="banner" src={link} />
    </div>
  );
};

export default Banner;