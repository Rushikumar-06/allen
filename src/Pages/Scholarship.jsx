import CoursesBanner from "../components/CourseBanner/CourseBanner.jsx"
import Tallentext  from "../components/Tallentext/Tallentext.jsx"
import "./Scholarship.css"
import TallentexBenefits from "../components/TallentexBenefits/TallentexBenefits.jsx"
import TallentexForm from "../components/TallentexForm/TallentexForm.jsx"
import AppAdvantages  from "../components/AppAdvantages/AppAdvantages.jsx"
import CallbackAskedQuestions from "../components/CallbackAskedQuestions/CallbackAskedQuestions.jsx"
function Scholarship() {
  const AppAdvantagesImages = [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1747131764/hliku2h4msyqpkoj5shv.svg?_upload_ref=ic_img_tool&__ar__=1.60",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1747132047/rfoqxwckidupnyzgur01.svg?_upload_ref=ic_img_tool&__ar__=1.60",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1747132001/h5ucv55bp3lb3wh7vja0.svg?_upload_ref=ic_img_tool&__ar__=1.60",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1747132047/rfoqxwckidupnyzgur01.svg?_upload_ref=ic_img_tool&__ar__=1.60"
  ]
  const AppAdvantageData = [
    { head: "Who can take this exam?", text: "The online mode of TALLENTEX is for students interested in enrolling in ALLEN's Online Courses, currently in classes 5-10." },
    { head: "How to register?", text: "Fill out the form above. You’ll get a confirmation on your registered mobile number. Log in using your number and OTP" },
    { head: "How do I take the exam?", text: "The test will be monitored online at www.allen.in. Log in on your chosen date and time slot using your registered mobile number. Keep your camera on and ensure a stable internet connection." },
    { head: "Where do I check the scholarship details?", text: "Scholarships will be announced on www.allen.in in November 2025. You’ll also receive the details via SMS and inside your account. These can be used at the time of enrolment." }
  ]
  const CallbackAskedQuestionsData=[
    {
    question: "What is the syllabus, marking scheme & overall exam pattern for the TALLENTEX exam?",
    answer:
      "The exam is based on the NCERT syllabus of both the previous and current class. You can also find the exam pattemunder the 'Syllabus & exam pattern' section."
  },
  {
    question: "What is the duration and medium of the exam?",
    answer:
      "The exam will be 2 hours long and conducted in English."
  },
  {
    question: "Do I need to create a new account for TALLENTEX 2025 if I registered for TALLENTEX 2024?",
    answer:
      "Yes, you must create a new account using your mobile number as the login credential."
  },
  {
    question: "Can I reschedule the exam if I miss it?",
    answer:
      "No, rescheduling is not allowed. Kindly ensure that you attend the test at your chosen date and time."
  },
  {
    question: "Who can I contact for support or queries?",
    answer:
      "For any assistance, Call: +91-9513736499 (8:00 AM – 8:00 PM), or email us at wecare@allen.in"
  }
  ]
  return (
    <div>
      <CoursesBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747375941/wxnefgxsiblpxbkfdqol.png?_upload_ref=ic_img_tool&__ar__=14.60" />
      <div className="scholarship-container">
        <div  className="scholarship-left">
            <Tallentext />
             <div className="scholarship-image">
      <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1747116708/pwzwxw3qfwrxwzimy7pn.svg?_upload_ref=ic_img_tool&__ar__=2.73"  />
      
          </div>
          <TallentexBenefits/>
        </div>
        <div className="scholarship-right">
            <TallentexForm />
        </div>
      </div>
      <div  className ="Scholarship-add" >
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1747208760/tldooemobx2htmwpi8zl.png?_upload_ref=ic_img_tool&__ar__=4.14" alt="" />
      </div>
      <AppAdvantages images = {AppAdvantagesImages}  data={AppAdvantageData}  />
      <CallbackAskedQuestions faqData={CallbackAskedQuestionsData} />
    </div>
  )
}

export default Scholarship
