// File: CourseCard.jsx
import {useContext} from 'react';
import './CoursesCard.css';


const CoursesCard = ({cardData,name}) => {
  
  return (
   
    <div className='coursecard'>
    <h2>{name}</h2>
    <hr></hr>
    <br></br>
     <div className='course-card-container'>
    { cardData.map((data,index)=>
     <div className="course-card" key={index}>
      <div className="course-card-tag">
        <span className="course-card-tag-icon"></span> {data.type}
      </div>

      <h3 className="course-card-title">{data.title}</h3>
      <p className="course-card-subtitle">{data.subtitle}</p>

      <ul className="course-card-features">
        {data.features && data.features.map((data1,index1) =>(
          <li key={index1}>{data1}</li>
        ))}
      </ul>

      <div className="course-card-footer">
        <div className="course-card-price">
          {data.price} <span className="course-card-tax-note">+ Taxes applicable</span>
        </div>
        <a href="#" className="course-card-know-more">Know more &rarr;</a>
      </div>
    </div>
    ) }
  </div>
   </div>
  
   
  );
  
};

export default CoursesCard
;
