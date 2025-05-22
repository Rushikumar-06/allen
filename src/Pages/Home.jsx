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
        { para: "JEE Advanced Rank Predictor", linkName: "Predict Rank", link: "/jee-advanced-rank-predictor" },
        { para: "JEE Advanced Exam Guid", linkName: "Explore Now", link: "/jee-advanced/2025" },
        { para: "Neet Rank Predictor", linkName: "Predict Rank", link: "/neet-rank-predictor" },
        
    ];
    return (
        <div>
            
            <RegistrationComponent/>
            <OnlineCourse/>
            <div className="free-resources">
                <h2 className="free-resources-head">Free Resources</h2>
                <div className="free-resources-container">
                    {freeResourcesData.map((item, index) => (
                        <FreeResources key={index} para={item.para} linkName={item.linkName} link={item.link}/>
                    ))}
                </div>
            </div>
            <WhatsTrending/>
            <Champions/>
            <AppAdvantages/>
            <Testimonials/>
            <Form/>
            <AppDownload/>
        </div>
    )
}
export default Home;