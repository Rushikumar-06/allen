import "./FreeResources.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
function FreeResources(props){
    
    return(
        <Link to={props.link} className="free-resources-card-container">
            <div className="free-resources-card" style={{backgroundImage: `url(${props.image})`}}>
            <p className="free-resources-card-head">{props.para}</p>
            <p className="free-resources-card-link">{props.linkName} <span ><MdOutlineNavigateNext className="free-resources-card-link-next"/></span></p>
            </div>
        </Link>
    
    )
}
export default FreeResources;