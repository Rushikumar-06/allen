import React from 'react'
import Curosal from "../Curosal/Curosal.jsx"
import "./SchoolsAssociation.css"

function SchoolsAssociation() {
    const curosalIamages = [
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1743104447/daaztkfiov9fc4jy6zth.png?_upload_ref=ic_img_tool&__ar__=4.00",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1743104447/rxl9cqyq2mmpw25dhwxr.png?_upload_ref=ic_img_tool&__ar__=4.00",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1743104447/aiaf9c5mwhrkibhhw339.png?_upload_ref=ic_img_tool&__ar__=4.00"
    ]
    return (
    <div className="SchoolsAssociation-container">
        <h1>Schools in association with us</h1>
      <div className='SchoolsAssociation-curosal'><Curosal  images={curosalIamages}/></div>
    </div>
  )
}

export default SchoolsAssociation
