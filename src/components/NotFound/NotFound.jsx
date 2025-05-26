import "./NotFound.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notfound-container">
      <div className ="notfound-img"><img src="https://static.allen.in/_next/static/media/404.358570ba.png" alt="" /></div>
      <div className="notfound-text">
        <p>Content Not Found</p>
        <button className="notfound-home-btn"><Link to ="/" className="notfound-home-btn-link" >Go to Home</Link></button>
      </div>
    </div>
  )
}

export default NotFound
