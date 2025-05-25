import React from 'react'
import CourseBanner from "../components/CourseBanner/CourseBanner.jsx"
import CallbackForm from "../components/CallbackForm/CallbackForm.jsx"
import CoursesAdd from '../components/CoursesAdd/CoursesAdd.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import CallbackAskedQuestions from '../components/CallbackAskedQuestions/CallbackAskedQuestions.jsx'
function Callback() {
  return (
    <div>
      <CourseBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1738131107/wjdwter18zzzdrpkjerb.png?_upload_ref=ic_img_tool&__ar__=6.95"/>
      <CallbackForm />
      <CoursesAdd img="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744026801/y7zaovofbswpvkhpldck.png?_upload_ref=ic_img_tool&__ar__=4.03" />
      <Testimonials />
      <CallbackAskedQuestions />
    </div>
  )
}

export default Callback
