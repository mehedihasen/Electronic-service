import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faCheckCircle, faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Choice = () => {
    return (
        <div className="continer row" style={{backgroundColor:"cyan"}}>
        <h1 style={{textAlign : "center"}}>Why people are Choosing us</h1>
        <div className="sty col-md-3">
            {/* <img src='' alt="" style={{width : "150px"}}/> */}
            <FontAwesomeIcon icon={faCheckCircle}  style={{fontSize : "100px",}} /> 

            <h3> Guarantee</h3>
            <h5>
Get a reservice if the service rendered is unsatisfactory*</h5>

        </div>
        <div className="sty col-md-3">
        <FontAwesomeIcon icon={faUserShield}  style={{fontSize :"100px"}} />
            <h3> Protection</h3>
            <h5>
Enjoy free protection coverage for damage and theft for Kaodim Protection </h5>

        </div>
        <div className="sty col-md-3" >
        <FontAwesomeIcon icon={faAddressBook}  style={{fontSize : "100px"}} />
            <h3>Service Integrity</h3>
            <h5>
Service providers are background checked and subject to high performance standards set by Kaodim.</h5>

        </div>
        
    </div>
    );
};

export default Choice;