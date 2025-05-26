import { useState } from "react";
import "./AppAdvantages.css";
function AppAdvantages({images,data}) {
    const [current, setCurrent] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    
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