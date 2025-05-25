import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineNavigateNext } from "react-icons/md";

import "./OtherResources.css"
function OtherResources(props) {
   return(
        <Link to={props.link} className="other-resources-card-container">
            <div className="other-resources-card" style={{backgroundImage: `url(${props.image})`}}>
            <p className="other-resources-card-head">{props.para}</p>
            <p className="other-resources-card-link">{props.linkName} <span ><MdOutlineNavigateNext className="other-resources-card-link-next"/></span></p>
            </div>
        </Link>
    
    )
}

export default OtherResources
