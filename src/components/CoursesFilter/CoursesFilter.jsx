import './CoursesFilter.css';
import {useContext} from 'react';
import { VscSettings } from "react-icons/vsc";
import { filteringData } from '../../Pages/Courses.jsx'; 
function CoursesFilter(){
  const {renderData,setRenderData} = useContext(filteringData)
  function toggleRenderData(type){
    renderData.includes(type) ? setRenderData(prev=>prev.filter(item => item !== type )) : setRenderData(prev => [...prev,`${type}`])
    
  }
  console.log(renderData)
  return (
    <div>
        <div className='coursesfilter'>
            <h2>NEET courses for Class 11th</h2>
            <div className='coursesfilter-container'>
                <button className='coursesfilter-container-btn0'><VscSettings  className='coursesfilter-container-btn-icon' /> Filters <span>{renderData.length >0 ? renderData.length : null}</span></button>
                <div className="divider"></div>
                <button className='coursesfilter-container-btn1'><VscSettings  className='coursesfilter-container-btn-icon'/> Session: 2025-26</button>
                <button className={renderData.includes("Live Online Courses") ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}  onClick={()=> toggleRenderData("Live Online Courses")}><VscSettings  className='coursesfilter-container-btn-icon' /> Live</button>
                <button className={renderData.includes("Test Series") ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}   onClick={()=> toggleRenderData("Test Series")}><VscSettings  className='coursesfilter-container-btn-icon'  /> Online Test Series</button>
                <button className={renderData.includes("Self Study Courses") ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}  onClick={()=> toggleRenderData("Self Study Courses")}><VscSettings  className='coursesfilter-container-btn-icon' /> Recorded</button>
                <button className={renderData.includes("Practice Packages") ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}   onClick={()=> toggleRenderData("Practice Packages")}><VscSettings  className='coursesfilter-container-btn-icon'  /> Practice</button>
        </div>
        </div>
    </div>
  )
};

export default CoursesFilter;
