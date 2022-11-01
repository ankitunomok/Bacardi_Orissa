import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("all select");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [drinkingAge, setDrinkingAge] = useState();
    const [termConditions, setTermConditions] = useState(false);
    const [BacardiRegards, setBacardiRegards] = useState(false);
    const mobileValidation = /^[0]?[6789]\d{9}$/;

    const handleSubmit = () => {
        console.log(name.length)
        if (!mobileValidation.test(mobile)) {
            alert("Please enter valid mobile number");
            return;
        }
        if (name.length <= 0) {
            alert("Please enter Name");
            return;
        }
        if (drinkingAge.length <= 0) {
            alert("Please enter Name");
            return;
        }
        if (!termConditions) {
            alert("Please Check Term & Conditions");
            return;
        }
        if (!BacardiRegards) {
            alert("Please Check get future communications from Bacardi in regards with offers.");
            return;
        }
        console.log("name", name);
        console.log("mobile", mobile);
        console.log("city", city);
        console.log("term_conditions", termConditions);
        console.log("bacardivalidation", BacardiRegards);

        navigate('otp');
    }

    return (
        <div className="main-section">
            <div className="content-wrap">
                <div className="block register-content register-form">
                    <div className="container">
                        <div className="form-container">
                            <div className="form-wrap">
                                <div className="form-inner">
                                    <form>
                                        <div className="form-title">
                                            <h2 className="form-title-label">REGISTRATION</h2>
                                        </div>
                                        <div className="form">
                                            <div className="form-group">
                                                <label className="input-label">Name *</label>
                                                <div className="input-group">
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="input-label">Mobile Number *</label>
                                                <div className="input-group">
                                                    <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" placeholder="Enter Mobile" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="input-label">City *</label>
                                                <div className="input-group select-group">
                                                    <select className="form-control" onChange={(e) => setCity(e.target.value)} value={city}>
                                                        <option value="all select">Select your city</option>
                                                        <option value="jaipur">Jaipur</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group radio-group-btn ques-group">
                                                <label className="input-label">Are you above legal drinking age? *</label>
                                                <div className="input-group"> <span className="checkbox">
                                                    <input
                                                        type="radio"
                                                        name="age"
                                                        value="yes"
                                                        checked={drinkingAge === "yes"}
                                                        onChange={(e) => setDrinkingAge(e.target.value)}
                                                    />
                                                    <label></label>
                                                    <span className="check-label">Yes</span> </span> </div>
                                                <div className="input-group"> <span className="checkbox">
                                                    <input
                                                        type="radio"
                                                        name="age"
                                                        value="no"
                                                        checked={drinkingAge === "no"}
                                                        onChange={(e) => setDrinkingAge(e.target.value)}
                                                    />
                                                    <label></label>
                                                    <span className="check-label">No</span> </span> </div>
                                            </div>

                                            <div className="form-group"> <span className="checkbox">
                                                <input onChange={() => setTermConditions(!termConditions)} checked={termConditions} type="checkbox" />
                                                <label></label> </span>
                                                <span className="check-label privacy-policy">I accept<a href="" onClick={() => { navigate('term_conditions') }} className="link-tag"> Terms & Conditions</a></span>  </div>
                                        </div>
                                        <div className="form-group"> <span className="checkbox">
                                            <input onChange={() => setBacardiRegards(!BacardiRegards)} checked={BacardiRegards} type="checkbox" />
                                            <label></label>
                                            <span className="check-label privacy-policy">I agree to get future communications from Bacardi in regards with offers, new products, ETC.</span> </span>
                                        </div>
                                        {/* <!--div className="form-group radio-group-btn ques-group"> */}
                                        {/* <label className="input-label">What is the logo of BACARDÍ? *</label>
                                        <div className="input-group"> <span className="checkbox">
                                            <input type="radio" name="logo" />
                                            <label></label>
                                            <span className="check-label">Bat  </span> </span> </div>
                                        <div className="input-group"> <span className="checkbox">
                                            <input type="radio" name="logo" />
                                            <label></label>
                                            <span className="check-label">Cat </span> </span> </div>
                                        <div className="input-group"> <span className="checkbox">
                                            <input type="radio" name="logo" />
                                            <label></label>
                                            <span className="check-label">Elephant </span> </span> </div> */}
                                        {/* </div--!> */}
                                        {/* <!--div className="form-group"> */}
                                        {/* <label className="input-label">OTP *</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="xxxxxx" value="" />
                                        </div> */}
                                        {/* </div--!> */}
                                        <div className="button-bar full-btn">
                                            <div className="button-bar-outer">
                                                <div className="col">
                                                    <button onClick={handleSubmit} className="btn primary-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login