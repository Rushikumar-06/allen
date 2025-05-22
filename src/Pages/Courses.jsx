import CourseBanner from "../components/CourseBanner/CourseBanner.jsx"
import CourseFilter from "../components/CoursesFilter/CoursesFilter.jsx"
import CoursesCard from "../components/CoursesCard/CoursesCard.jsx"
import Data from "../Data/Courses.json"
import CoursesAdd from "../components/CoursesAdd/CoursesAdd.jsx"
import {  useState } from "react"
function Courses(){
    const onclassesdata = Data.coursesonlinecourse
    const selfstudydata = Data.coursesselfstudy
    const testseriesdata =Data.coursestestseries
    const practicepakagesdata = Data.coursespracticepakages
    const [renderData,setRenderData] = useState([])
    console.log(renderData)
    return( 
        <div>
                <CourseBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747201421/zcyo7ofwwfafhs0cl3ri.png?_upload_ref=ic_img_tool&__ar__=18.40"/>
                <CourseFilter props={["Live Online Courses","Self Study Courses","Test Series","Practice Packages"]}  filteringState={renderData} filteringFunction={setRenderData}/>
                {(renderData.length === 0 || renderData.includes("Live Online Courses")) ? <CoursesCard cardData={onclassesdata} name="Live Online Courses" /> : null}
                {(renderData.length === 0 || renderData.includes("Self Study Courses")) ? <CoursesCard cardData={selfstudydata} name="Self Study Courses" /> : null}
                {(renderData.length === 0 || renderData.includes("Test Series")) ? <CoursesCard cardData={testseriesdata} name="Test Series" /> : null}
                {(renderData.length === 0 || renderData.includes("Practice Packages")) ? <CoursesCard cardData={practicepakagesdata} name="Practice Packages" /> : null}
                <CoursesAdd />
        </div>
    )
}
export default Courses