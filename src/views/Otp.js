import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Otp() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");

    const VerifyOtp = () => {
        navigate('/congratulations');
    }

    return (
        <div className="main-section">
            <div className="content-wrap">
                <div className="block register-content register-form">
                    <div className="container">
                        <div className="form-container">
                            <div className="form-wrap">
                                <div className="form-inner">
                                    <div className="form-group">
                                        <label className="input-label">OTP *</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="xxxxxx" value={otp} onChange={(e) => setOtp(e.target.value)} />
                                            <span className="resend-otp-label"><span>Didn't Receive? </span><div style={{ display: "inline-block" }} className="resend-link"> Resend</div></span>
                                        </div>
                                    </div>
                                    <div className="button-bar full-btn">
                                        <div className="button-bar-outer">
                                            <div className="col">
                                                <button onClick={VerifyOtp} className="btn primary-btn">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Otp