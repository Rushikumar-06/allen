import "./Header.css"
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { loginContext } from "../../App";
function Header(){
    const { loginStatus,setLoginStatus } = useContext(loginContext);
           
    function handleLoginClick() {
    if (loginStatus) {
        setLoginStatus(false);
    }
}

    return(
        <div className="header-component">
            <div className="header-position">
                <div className="header">
                <div className="logo-navbar">
                    <div><Link to="/"><img src="https://images.seeklogo.com/logo-png/48/1/allen-career-institute-logo-png_seeklogo-482569.png" alt="" className="logo"/></Link></div>
                <div>
                    <ul  className="navbar">
                        <li className="nav-link "><Link to="/courses " className="nav-link-item">Courses</Link></li>
                        <li className="nav-link "><Link to = "/test-series" className="nav-link-item"> Test Series</Link></li>
                        <li className="nav-link "><Link to = "/results" className="nav-link-item">Results</Link></li>
                        <li className="nav-link "><Link to = "/study-material" className="nav-link-item">Study Material </Link></li>
                        <li className="nav-link "><Link to = "/books" className="nav-link-item">Books</Link></li>
                        <li className="nav-link "><Link to = "/more" className="nav-link-item">More</Link></li>
                    </ul>
                </div>
                </div>
                <div className="login-info">
                    <div className="header-phone-logo"><FaPhoneAlt /></div>
                    <button className="login-button" onClick={handleLoginClick}><Link to="/login" className="nav-link-item">{loginStatus ? "Logout" : "Login"}</Link></button>
                </div>
            </div>
            <div className="header-add"><span className="header-add-content">offer ends soon</span>   Join the NEET PowerPlusLIVECoursefor2026@9,990</div>
            </div>
        </div>
    );
}
export default Header;