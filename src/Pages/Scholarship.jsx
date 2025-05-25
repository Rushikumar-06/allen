import CoursesBanner from "../components/CourseBanner/CourseBanner.jsx"
import Tallentext  from "../components/Tallentext/Tallentext.jsx"
import "./Scholarship.css"
import TallentexBenefits from "../components/TallentexBenefits/TallentexBenefits.jsx"
import TallentexForm from "../components/TallentexForm/TallentexForm.jsx"
function Scholarship() {
  return (
    <div>
      <CoursesBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747375941/wxnefgxsiblpxbkfdqol.png?_upload_ref=ic_img_tool&__ar__=14.60" />
      <div className="scholarship-container">
        <div  className="scholarship-left">
            <Tallentext />
             <div className="scholarship-image">
      <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116708/pwzwxw3qfwrxwzimy7pn.svg?_upload_ref=ic_img_tool&__ar__=2.73"  />
      
          </div>
          <TallentexBenefits/>
        </div>
        <div className="scholarship-right">
            <TallentexForm />
        </div>
      </div>
      
    </div>
  )
}

export default Scholarship
