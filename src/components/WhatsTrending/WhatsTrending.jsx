import Curosal from "../Curosal/Curosal";
import "./WhatsTrending.css";
function WhatsTrending() {
    const curosalIamages = [
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747307730/ap7hlwbdvuxffg0dr5ez.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747053629/qi9uqsjw39s4ocslbmiy.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1746775819/vkvaga2h7eb3obdsnvxt.png?_upload_ref=ic_img_tool&__ar__=4.03https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1746445051/dwxnbu9ahncsmczd9bbp.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1746445051/dwxnbu9ahncsmczd9bbp.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1746632496/yjolikdke62z9xviit8h.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744092743/xfqehuywrkzlwbwwjque.png?_upload_ref=ic_img_tool&__ar__=4.03",
        "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744783430/iotfxmietkclmhwpjnln.png?_upload_ref=ic_img_tool&__ar__=4.03"
    ]
  return (
    <>
        <div className="whats-trending">
             <h1>What's Trending</h1>
             <Curosal images={curosalIamages}  />
        </div>
    </>
  );
}
export default WhatsTrending;