import React from 'react'
import CourseBanner from "../components/CourseBanner/CourseBanner.jsx"
import CallbackForm from "../components/CallbackForm/CallbackForm.jsx"
import CoursesAdd from '../components/CoursesAdd/CoursesAdd.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'
import CallbackAskedQuestions from '../components/CallbackAskedQuestions/CallbackAskedQuestions.jsx'
function Callback() {
  const CallbackAskedQuestionsData = [
  {
    question: "Which is the best online coaching for JEE?",
    answer:
      "ALLEN Digital is the best online JEE coaching in India. Our online courses are for students in Class 11th, 12th and 12th pass."
  },
  {
    question: "Is online coaching effective for JEE?",
    answer:
      "With online JEE coaching, you can now study in the comfort of your home with India’s best educators. The personalised approach, availability of experienced faculties, practice tests and flexibility, all help students perform better academically."
  },
  {
    question: "Is self-study better for JEE?",
    answer:
      "With self-study, online coaching is also important to prepare for the JEE Exam. Online JEE coaching can help you prepare the perfect study plan where you attend regular classes, take regular tests and examinations, improve your performance and get mentorship from India’s best educators."
  },
  {
    question: "Which online coaching is best for NEET?",
    answer:
      "ALLEN Digital stands out as the premier online coaching for NEET-UG in India. Our comprehensive online courses cater to students in Class 11th, 12th, and those who have already completed 12th."
  },
  {
    question: "Can I do online coaching for NEET-UG?",
    answer:
      "While self-study is valuable for NEET-UG preparation, enrolling in online coaching is equally important. Online NEET-UG coaching assists in creating an effective study plan, attending regular classes, taking tests and exams, improving overall performance, and receiving mentorship from India's best educators."
  },
  {
    question: "Can I study at home for NEET-UG?",
    answer:
      "While self-study is valuable for NEET-UG preparation, enrolling in online coaching is equally important. Online NEET-UG coaching assists in creating an effective study plan, attending regular classes, taking tests and exams, improving overall performance, and receiving mentorship from India's best educators."
  },
  {
    question: "Which is the best online coaching for Classes 6th to 10th?",
    answer:
      "ALLEN Digital is the leading online coaching for Classes 6th to 10th in India. Our online courses are tailored for students in Class 6th, 7th, 8th, 9th and 10th so that they can prepare for their school exams, board exams as well as build a strong foundation for their future."
  },
  {
    question: "Should I go for online coaching for Classes 6th to 10th?",
    answer:
      "Enrolling in online Class 6th to 10th coaching provides the convenience of studying from home with the guidance of India’s top educators. This personalized approach, along with access to experienced faculty, practice tests, and flexible learning options, significantly enhances students' academic performance."
  },
  {
    question: "Is self-study effective for Classes 6th to 10th?",
    answer:
      "Besides self-study, online coaching plays a significant role in preparing for the Class 6th to 10th Exam. Enrolling in online coaching offers the opportunity to create an effective study schedule, allowing you to participate in regular classes, take frequent tests and exams, enhance your academic performance, and receive guidance from India’s best educators."
  },
  {
    question: "What are the various courses offered by ALLEN Digital?",
    answer:
      "We are offering several online courses for Class 6th to Class 12th and 12th Passed Students covering NCERT, Olympiads, Foundation JEE & NEET and for Competitive Exams i.e. JEE (MAIN), JEE (MAIN + ADVANCED) & NEET (UG). For more information, you can visit our website."
  },
  {
    question: "In how many languages courses are available at ALLEN Digital?",
    answer:
      "The courses at ALLEN Digital are currently available in three languages: English, English + Hindi (Bilingual) & Gujarati."
  },
  {
    question: "What will be the fee structure for online classes?",
    answer:
      "The fee structure will depend on the type of course you are purchasing."
  },
  {
    question: "What will be the course commencement date for JEE, NEET (UG) & courses for classes 6th to 10th?",
    answer:
      "Every course will commence on a different date. So, please check the courses section on our website to know all the details."
  },
  {
    question: "How can I pay my course fee?",
    answer:
      "You can pay the fee for your course via Online Payment Modes, like Net Banking, UPI, Debit Cards, Credit Cards, etc."
  },
];
  return (
    <div>
      <CourseBanner link="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1738131107/wjdwter18zzzdrpkjerb.png?_upload_ref=ic_img_tool&__ar__=6.95"/>
      <CallbackForm />
      <CoursesAdd img="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1744026801/y7zaovofbswpvkhpldck.png?_upload_ref=ic_img_tool&__ar__=4.03" />
      <Testimonials />
      <CallbackAskedQuestions  faqData={CallbackAskedQuestionsData} />
    </div>
  )
}

export default Callback
