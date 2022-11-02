import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { asyncWrap } from '../asyncWrap';

function Otp() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    let mobile = localStorage.getItem("loginMob");
    let uniquecode = localStorage.getItem("uniquecode");
    const mobileValidation = /^[0]?[6789]\d{9}$/;

    useEffect(() => {
        sendOtp();
    }, [])

    const sendOtp = async () => {
        if (!mobileValidation.test(mobile)) {
            alert("Please enter valid mobile number");
            return;
        }

        const data = {
            phoneNumber: `+91${mobile}`,
            productId: "885",
            clientId: "241",
            role: "CONSUMER",
        };

        const config = {
            method: "post",
            url: "/sendOtp",
            data: data,
        };

        const [error, result] = await asyncWrap(axios(config));
        if (!result) {
            console.log(error);
            return;
        }
        if (result.data.status === "FAILURE") {
            alert(result.data.message);
            return;
        }
    };

    const VerifyOtp = async () => {
        if (otp.length <= 0) {
            alert("Please enter Otp");
            return;
        }
        const data = {
            phoneNumber: `+91${mobile}`,
            productId: "885",
            clientId: "241",
            role: "CONSUMER",
            otp: otp,
        };

        const config = {
            method: "post",
            url: "/cartaValidateOtp",
            data: data,
        };

        const [error, result] = await asyncWrap(axios(config));
        if (!result) {
            console.log(error);
            return;
        }
        if (result.data.status === "FAILURE") {
            alert(result.data.message);
            navigate('/')
            return;
        } else {

            const data = {
                phoneNumber: `+91${mobile}`,
                productId: "885",
                clientId: "241",
                code: uniquecode,
            };

            const config = {
                method: "post",
                url: "/validateCode",
                data: data,
            };

            const [error, result] = await asyncWrap(axios(config));
            if (!result) {
                console.log(error);
                return;
            }
            if (result.data.status === "FAILURE") {
                alert(result.data.message);
                navigate('/')
                return;
            } else {
                localStorage.removeItem("loginMob");
                localStorage.removeItem("uniquecode");
                navigate('/congratulations')
            }
        }
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
                                            <span className="resend-otp-label"><span>Didn't Receive? </span>
                                                <div onClick={(e) => {
                                                    e.preventDefault();
                                                    sendOtp();
                                                }} style={{ display: "inline-block" }} className="resend-link"> Resend</div></span>
                                        </div>
                                    </div>
                                    <div className="button-bar full-btn">
                                        <div className="button-bar-outer">
                                            <div className="col">
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    VerifyOtp();
                                                }} className="btn primary-btn">Submit</button>
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