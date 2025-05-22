import "./Champions.css";
import {Link }  from 'react-router-dom';
function Champions(){
    return(
        <div>
            <div className="champion-container">
                <h2>
                    Meet our Champions
                </h2>
                <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731570115/desktop_b1jw5i.webp" alt="Champions" className="champion-image"/>
                <div className="champion-content">
                    <button className="champion-button"><Link to="/jee/results-2025" style={{textDecoration:"none",color:"black"}}>View Jee mains 2025 result</Link></button>
                    <button className="champion-button"><Link to="/neet/results-2024" style={{textDecoration:"none",color:"black"}}>View Neet 2025 result</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Champions;