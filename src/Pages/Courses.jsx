import CourseBanner from "../components/CourseBanner/CourseBanner.jsx"
import CourseFilter from "../components/CoursesFilter/CoursesFilter.jsx"
import CoursesCard from "../components/CoursesCard/CoursesCard.jsx"
import Data from "../Data/Courses.json"
import CoursesAdd from "../components/CoursesAdd/CoursesAdd.jsx"
import {useState,createContext} from "react"
export const filteringData = createContext()
function Courses(){
    const onclassesdata = Data.coursesonlinecourse
    const selfstudydata = Data.coursesselfstudy
    const testseriesdata =Data.coursestestseries
    const practicepakagesdata = Data.coursespracticepakages
    const [renderData,setRenderData] = useState([])
    console.log(renderData)
    return( 
        <div>
            <filteringData.Provider value={{
                renderData:renderData,
                setRenderData:setRenderData
            }}>
                <CourseBanner/>
                <CourseFilter />
                {(renderData.length === 0 || renderData.includes("Live Online Courses")) ? <CoursesCard cardData={onclassesdata} name="Live Online Courses" /> : null}
                {(renderData.length === 0 || renderData.includes("Self Study Courses")) ? <CoursesCard cardData={selfstudydata} name="Self Study Courses" /> : null}
                {(renderData.length === 0 || renderData.includes("Test Series")) ? <CoursesCard cardData={testseriesdata} name="Test Series" /> : null}
                {(renderData.length === 0 || renderData.includes("Practice Packages")) ? <CoursesCard cardData={practicepakagesdata} name="Practice Packages" /> : null}
                <CoursesAdd />
            </filteringData.Provider>
        </div>
    )
}
export default Courses