import RegistrationComponent from '../components/registrationComponent/registrationComponent.jsx';
import OnlineCourse from '../components/onlineCourse/onlineCourse.jsx';
import FreeResources from '../components/FreeResources/FreeResources.jsx';
import WhatsTrending from '../components/WhatsTrending/WhatsTrending.jsx';
import Champions from '../components/Champions/Champions.jsx';
import AppAdvantages from '../components/AppAdvantages/AppAdvantages.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Form from '../components/Form/Form.jsx';
import AppDownload from "../components/AppDownload/AppDownload.jsx"
import "../components/FreeResources/FreeResources.css"; // If you still need to import the CSS here
function Home(){
    const freeResourcesData = [
        { para: "JEE Advanced Rank Predictor", linkName: "Predict Rank", link: "/jee-advanced-rank-predictor", image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050758/vqlzquv4ypnjlhf7zd61.png?_upload_ref=ic_img_tool&__ar__=1.68" },
        { para: "JEE Advanced Exam Guid", linkName: "Explore Now", link: "/jee-advanced/2025", image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050810/uvfjnf35zedfyb3bnfwb.png?_upload_ref=ic_img_tool&__ar__=1.67" },
        { para: "Neet Rank Predictor", linkName: "Predict Rank", link: "/neet-rank-predictor", image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050888/uxqrvzofqoibjbhl25va.png?_upload_ref=ic_img_tool&__ar__=1.68" },
        
    ];
    const AppAdvantagesImages =[
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool",
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool",
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool"
    ]
    const AppAdvantageData = [
      {head:"400 Lakh+ Questions Practised",text:"Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas"},
      {head:"10 Lakh+ hours of Learning Content consumed",text:"Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level."},
      {head:"10 Lakh+ Doubts Solved",text:"Get instant answers with faculty help & our AI Assistant available 24/7 in any language."}
    ]
    
    return (
        <div>
            
            <RegistrationComponent/>
            <OnlineCourse/>
            <div className="free-resources ">
                <h2 className="free-resources-head">Free Resources</h2>
                <div className="free-resources-container">
                    {freeResourcesData.map((item, index) => (
                        <FreeResources key={index} para={item.para} linkName={item.linkName} link={item.link} image = {item.image}/>
                    ))}
                </div>
            </div>
            <WhatsTrending/>
            <Champions/>
            <AppAdvantages images={AppAdvantagesImages}  data = {AppAdvantageData}/>
            <Testimonials/>
            <Form/>
            <AppDownload/>
        </div>
    )
}
export default Home;