import React from 'react'
import MoreTop from "../components/MoreTop/MoreTop.jsx"
import SchoolsAssociation from "../components/SchoolsAssociation/SchoolsAssociation.jsx"
import MoreBroucher from "../components/MoreBroucher/MoreBroucher.jsx"
import MoreCurosal from "../components/MoreCurosal/MoreCurosal.jsx"
import MoreRoomExperience from "../components/MoreRoomExperience/MoreRoomExperience.jsx"
import Testimonials from "../components/Testimonials/Testimonials.jsx"
import Form from "../components/Form/Form.jsx"
function MorePage() {
  const slides = [
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742383875/cad5yhd3ro1x9o01tyjv.png?_upload_ref=ic_img_tool&__ar__=1.10", 
    title: "1: 1 Mentorship sessions",
    description: "To guide each student towards academic success & mental well-being.",
  },
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742383875/qzqfomy6wnjkfh51pe0r.png?_upload_ref=ic_img_tool&__ar__=1.10",
    title: "Class recordings",
    description: "Students can catch up on missed live classes...",
  },
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_auto,q_auto/v1742383875/j7hdrqhtwzctr63n4wib.png?_upload_ref=ic_img_tool&__ar__=1.10",
    title: "24/7 doubt support",
    description: "Instant video solutions by faculty",
  },
];
  return (
    <>
      <MoreTop />
      <SchoolsAssociation />
      <MoreBroucher />
      <MoreRoomExperience />
      <MoreCurosal slides={slides} />
      <Testimonials />
      <Form />
    </>
  )
}

export default MorePage
