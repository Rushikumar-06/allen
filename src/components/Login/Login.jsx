import React, { useState ,useRef,useEffect} from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { loginContext } from '../../App';
import {Link} from 'react-router';
function Login() {
  const [mobile, setMobile] = useState('');
  const isValidMobile = mobile.length === 10;
  const [otpStatus, setOtpStatus] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const randomNumber = Math.floor(Math.random() * 9000+1000);
  const otpRef = useRef();
  const [resendOtp, setResendOtp] = useState(false);
  const { setLoginStatus } = useContext(loginContext);
  const [errormsg, setErrorMsg] = useState(false);
    useEffect(() => {
        otpRef.current = randomNumber;
    }, [resendOtp]);
  function handleOtpSubmit() {
    if (otp == otpRef.current){
        navigate("/", { replace: true });
        setLoginStatus(true);
    }

  }
  return (
    <div className="login-background">
        {!otpStatus ? 
        <form onSubmit={(e) => {
                e.preventDefault();
                if (isValidMobile && parseInt(mobile)== mobile) {
                    alert(`${otpRef.current} is your OTP`);
                    setOtpStatus(true);
                }
                else{
                    setErrorMsg(true);
                    setMobile("")
                }
            }}>
            <div className="login-container">
        <h2 className="login-heading">Login with mobile number</h2>
        <input
            type="text"
            maxLength="10"
            placeholder="Enter 10–digit mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="login-input"
        />
        {errormsg ? <p className='error-msg'>Please enter a valid mobile number</p> : null}
        <button
            disabled={!isValidMobile}
            className={`send-otp-button ${isValidMobile ? 'login-active' : 'login-disabled'}`}
            type="submit"
        >
            Send OTP
        </button>
        <button className='send-otp-button'><Link to="/" className='without-login'>Continue without login</Link></button>
        </div>
        </form>
        :
        <form  onSubmit={handleOtpSubmit}>
            <div className="login-container">
            <input
            type="text"
            maxLength="4"
            placeholder="Enter Otp"
            className="login-input"
            onChange={(e) => setOtp(e.target.value)}
        />
        <button className={`send-otp-button ${isValidMobile ? 'login-active' : 'login-disabled'}`}type="submit" >Submit</button>
        <div className='otp-btn-container'>
            <button onClick={() => {
                alert(`${otpRef.current} is your OTP`);
                setResendOtp(true);
            }}>Resend OTP</button>
            <button onClick={()=>{
                setOtpStatus(false);
                setMobile('');
                setOtp('');
                setLoginStatus(false);
                
            }}>change number</button>
        </div>
        </div>
        </form>
        
        }
    </div>
  );
}

export default Login;
