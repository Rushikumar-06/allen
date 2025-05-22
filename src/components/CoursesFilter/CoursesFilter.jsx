import './CoursesFilter.css';
import { VscSettings } from "react-icons/vsc";
function CoursesFilter({props,filteringState,filteringFunction}){
  function toggleRenderData(type){
    filteringState.includes(type) ? filteringFunction(prev=>prev.filter(item => item !== type )) : filteringFunction(prev => [...prev,`${type}`])
    
  }
  return (
    <div>
        <div className='coursesfilter'>
            <h2>NEET courses for Class 11th</h2>
            <div className='coursesfilter-container'>
                <button className={filteringState.length >0 ? 'coursesfilter-container-btn0 checked': 'coursesfilter-container-btn0 '}><VscSettings  className='coursesfilter-container-btn-icon' /> Filters <span>{filteringState.length >0 ? filteringState.length : null}</span></button>
                <div className="divider"></div>
                <button className='coursesfilter-container-btn1'><VscSettings  className='coursesfilter-container-btn-icon'/> Session: 2025-26</button>
                <button className={filteringState.includes(props[0]) ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}  onClick={()=> toggleRenderData(props[0])}><VscSettings  className='coursesfilter-container-btn-icon' /> Live</button>
                <button className={filteringState.includes(props[2]) ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}   onClick={()=> toggleRenderData(props[2])}><VscSettings  className='coursesfilter-container-btn-icon'  /> Online Test Series</button>
                <button className={filteringState.includes(props[1]) ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}  onClick={()=> toggleRenderData(props[1])}><VscSettings  className='coursesfilter-container-btn-icon' /> Recorded</button>
                <button className={filteringState.includes(props[3]) ? "coursesfilter-container-btn checked" : "coursesfilter-container-btn"}   onClick={()=> toggleRenderData(props[3])}><VscSettings  className='coursesfilter-container-btn-icon'  /> Practice</button>
        </div>
        </div>
    </div>
  )
};

export default CoursesFilter;
