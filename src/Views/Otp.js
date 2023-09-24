import React from 'react'
import handImg from "../Assets/hand.png"
import OtpInput from "react-otp-input";
import { useState } from 'react';
import './Otp.css'


const Otp = ({number, navigate, setNumber}) => {

  

  const [otp, setOtp] = useState('');
  return (
    <div className="app-body">
    <img className="hand-img" src={handImg} alt="otp-art"></img>
    <h4 className="heading">Please verify Mobile number</h4>
    <p className="number-info">
      An OTP is sent to <span>+{number}</span>
    </p>
    <p
      onClick={() => {
        setNumber('')
        navigate("/")
      }}
      className="change-number-link"
    >
      Change Phone Number
    </p>
    <OtpInput
      value={otp}
      onChange={setOtp}
      
      inputStyle={{
        width: "49px",
        height: "49px",
        color: "black",
        marginRight: "18px",
        fontSize: "18px",
        border: "1px solid lightgray",
        borderRadius: "5px",
      }}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
      containerStyle={{
        marginTop: "80px",
        marginLeft: "13px",
      }}
      isInputNum={true}
    />
    <p className="resend-link">
      Didn't receive the code?
      <span> Re-send</span>
    </p>
    <button className="submit-button" onClick={()=>{
      navigate("/success")
    }}>
      Verify
    </button>
  </div>
  )
}

export default Otp
