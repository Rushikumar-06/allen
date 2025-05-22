import "./onlineCourse.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';

function onlineCourse(){
    return(
        <div>
            <div className="online-course">
                <h2 className="online-course-head">Discover the perfect online course </h2>
                <div className="online-course-container">
                    <Link to="jee" className="online-course-card"> 
                            <p className="online-course-card-head">JEE </p>
                            <p  className="online-course-card-link">View <span ><MdOutlineNavigateNext className="online-course-card-link-next"/></span></p>
                    </Link>
                    <Link to="/neet" className="online-course-card">
                        <p className="online-course-card-head">NEET</p>
                        <p  className="online-course-card-link">View <span ><MdOutlineNavigateNext className="online-course-card-link-next"/></span></p>
                    </Link>
                    <Link to="/classes-6-10"className="online-course-card">
                        <p className="online-course-card-head">Class 6-10</p>
                        <p  className="online-course-card-link">View <span ><MdOutlineNavigateNext className="online-course-card-link-next"/></span></p>
                    </Link>
                </div>
                <h2 className="online-course-head2">Why Allen Online</h2>
                <div className="online-course-container2">
                    <div className="online-course-card2">
                        <p className="online-course-card2-head">Kota Faculty</p>
                        <p  className="online-course-card2-para">Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years</p>
                    </div>
                    <div className="online-course-card2">
                        <p className="online-course-card2-head">Proven Results</p>
                        <p  className="online-course-card2-para">Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams</p>
                    </div>
                    <div className="online-course-card2">
                        <p className="online-course-card2-head">Learning Tools</p>
                        <p  className="online-course-card2-para">24x7 doubt resolution and customized study material to test, and improve continuously</p>
                    </div>
                    <div className="online-course-card2">
                        <p className="online-course-card2-head">Mentor Support</p>
                        <p  className="online-course-card2-para">Regular mentorship sessions with mentor, regular mentorship sessions, guidance on exam strategy & updates to parents</p>
                    </div>
                </div>
                <div className="online-course-button-container"><button className="online-course-button">Explore Online Courses</button></div>
            </div>
        </div>
    )
}
export default onlineCourse;