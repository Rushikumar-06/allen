import { useState } from "react";
import "./AppAdvantages.css";
function AppAdvantages() {
    const [current, setCurrent] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const data = [
      {head:"400 Lakh+ Questions Practised",text:"Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas"},
      {head:"10 Lakh+ hours of Learning Content consumed",text:"Watch live or recorded lectures from ALLEN's top faculty, covering every topic and difficulty level."},
      {head:"10 Lakh+ Doubts Solved",text:"Get instant answers with faculty help & our AI Assistant available 24/7 in any language."}
    ]
    const images =[
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330769/vtga4hno9tvp668jm34i.svg?_upload_ref=ic_img_tool",
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool",
      "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330851/jncudghayyflxuxoodkg.svg?_upload_ref=ic_img_tool"
    ]
    function handlecontent(e){
      setCurrent(e);
      setImageIndex(e);
    }
  return (
    <div>
        <div className="app-advantages">
            <h2 className="app-advantages-head">Allen App Advantage</h2>
            <div className="app-advantages-content">
               <div className="app-advantages-content-left">
                {data.map((item,index)=>(
                  <div onClick={()=>handlecontent(index) } key={index}>
                    <h3 className="app-advantages-content-left-head" >{item.head}</h3>
                    <p className="app-advantages-content-left-text">{current === index ? item.text:null}</p>
                    <hr></hr>
                  </div>
                ))}
               </div>
                <div className="app-advantages-content-right">
                  <img src={images[imageIndex]} alt="App Advantages" className="app-advantages-image"/>
                </div>
            </div>
            <div className="app-advantage-btn"><button>Explore more</button></div>
        </div>
    </div>

  );
}
export default AppAdvantages;