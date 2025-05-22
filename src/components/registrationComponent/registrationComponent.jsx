import "./registrationComponent.css"
import Curosal  from "../Curosal/Curosal"
function registration(){
    const curosalIamages = [
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911179/m6l4kbtrdldjtbbzuyrk.webp?_upload_ref=ic_img_tool&__ar__=1.78",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745222201/algooaqu0aioqkysfkd5.png?_upload_ref=ic_img_tool&__ar__=1.78",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911254/tjoxygcum0qc6gp9lxuw.webp?_upload_ref=ic_img_tool&__ar__=1.78",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911357/o5vw0mvt9ovusu2l8lqe.webp?_upload_ref=ic_img_tool&__ar__=1.78",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911428/wpslqk3e1lpalk1hsqid.webp?_upload_ref=ic_img_tool&__ar__=1.78"
    ]
    
    return(
        <div>
            <div className="registration-component">
               <div className="registration-position">
                     <div className="registration">
                        <h1 className="registration-head">Get up to 90% scholarship on ALLEN Courses</h1>
                        <p className="registration-para">Register for scholarship</p>
                        <div>
                            <button  className="registration-button1">Online Course</button>
                            <button  className="registration-button2">Offline Course</button>
                        </div>
                    </div>
                    <div className="registration-curosal"><Curosal images = {curosalIamages} /></div>
               </div>
               <div ><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1746789517/dpc077mkzbtuojkzcp3w.png?_upload_ref=ic_img_tool&__ar__=4.34" alt="" className="registration-add" /></div>
            </div>
        </div>
    )
}
export default registration