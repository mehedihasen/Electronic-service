import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faFacebookF, faGoogle, faInstagram, faTwitter , } from '@fortawesome/free-brands-svg-icons';

import './Fotter.css'

const Fotter = () => {
    return (
        <div className='fotter'>
         <div className="fotterbody">
         <p>Connect with us</p>
         <table>
        
             <tr>
                
                 <td className="icon"> <FontAwesomeIcon icon={faFacebookF} style={{fontSize : "40px"}} /></td>
                 <td className="icon"><FontAwesomeIcon icon={faGoogle}  style={{fontSize : "40px"}}/></td>
                 <td className="icon"><FontAwesomeIcon icon={faTwitter}  style={{fontSize : "40px"}} /></td>
                 <td className="icon"><FontAwesomeIcon icon={faInstagram}  style={{fontSize : "40px"}} /></td>
                 
             </tr>
         </table>
        
         <p>© 2021 Kaodim. All rights reserved</p>
         </div>
            
        </div>
    );
};

export default Fotter;