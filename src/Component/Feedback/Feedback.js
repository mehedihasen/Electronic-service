import React from 'react';
import './feed.css';
import meet from '../../image/meet.jpg'
import pay from "../../image/pay.jpg"
import requ from '../../image/request-word-arrows-connectingrequest.jpg'

const Feedback = () => {
    return (
        <div className="continer row">
            <h1 style={{textAlign : "center"}}>How It Work</h1>
            <div className="sty col-md-3">
                <img src={requ} alt="" style={{width : "150px"}}/>
                <h3>1. Request Services</h3>
                <h5>Need some help? Tell us what services you need and where do you need them - directly from our website or mobile app.</h5>

            </div>
            <div className="sty col-md-3">
                <img src={meet} alt="" style={{width : "150px"}}/>
                <h3>2. Get Connected</h3>
                <h5>Need some help? Tell us what services you need and where do you need them - directly from our website or mobile app.</h5>

            </div>
            <div className="sty col-md-3" >
                <img src={pay} alt="" style={{width : "150px"}}/>
                <h3>3. Hire & Pay</h3>
                <h5>Need some help? Tell us what services you need and where do you need them - directly from our website or mobile app.</h5>

            </div>
            
        </div>
    );
};

export default Feedback;