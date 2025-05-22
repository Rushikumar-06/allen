import CourseBanner from "../components/CourseBanner/CourseBanner.jsx";
import CourseFilter from "../components/CoursesFilter/CoursesFilter.jsx";
import CoursesCard from "../components/CoursesCard/CoursesCard.jsx";
import CoursesAdd from "../components/CoursesAdd/CoursesAdd.jsx";
import Data from "../Data/TestSeries.json"
import { useState } from "react";
function TestSeries() {
     const onclassesdata = Data.TestSeriesonlinecourse
     const selfstudydata = Data.TestSeriesselfstudy
     const testseriesdata =Data.TestSeriestestseries
     const practicepakagesdata = Data.TestSeriespracticepakages
    const [renderDataTest,setRenderDataTest] = useState(["Self Study Courses test","Test Series test","Practice Packages test"])
  return (
    <div>
      <CourseBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747409978/yv2wu6cwh8olvwmsqoq5.png?_upload_ref=ic_img_tool&__ar__=11.22" />
      <CourseFilter props={["Live Online Courses test","Self Study Courses test","Test Series test","Practice Packages test"]} filteringState={renderDataTest} filteringFunction={setRenderDataTest} />
      {(renderDataTest.length === 0 || renderDataTest.includes("Live Online Courses test")) ? <CoursesCard cardData={onclassesdata} name="Live Online Courses" /> : null}
      {(renderDataTest.length === 0 || renderDataTest.includes("Self Study Courses test")) ? <CoursesCard cardData={selfstudydata} name="Self Study Courses" /> : null}
      {(renderDataTest.length === 0 || renderDataTest.includes("Test Series test")) ? <CoursesCard cardData={testseriesdata} name="Test Series" /> : null}
      {(renderDataTest.length === 0 || renderDataTest.includes("Practice Packages test")) ? <CoursesCard cardData={practicepakagesdata} name="Practice Packages" /> : null}
      <CoursesAdd />
            
    </div>
  )
}

export default TestSeries
