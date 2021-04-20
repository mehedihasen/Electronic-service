import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import "./siedbar.css"
import { Contexapi } from '../../App';

const Sidebar = () => {
     const [loginUser, setLoginUser] = useContext(Contexapi)
     const [per, setPer] =useState([])

     useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => {
           const chek  = data.filter(itm => loginUser.email=== itm.email)
           setPer(chek)
            })
 
    }, [])
    console.log("admin" , per.length);
  

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

              
                <li>
                    <Link to="/deshbord" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
            
                
            {per.length > 0 ? 
                 <div>

                    <li>
                        <Link to="/addadmin" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/deshbord" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Oderlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/updatelist" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Manage Servic</span>
                        </Link>
                    </li>
                 

                </div>
                    :  
                     <div>
                    
                    <li>
                        <Link to="/deshbord" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Total Oder u</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Review u</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Book New One u</span>
                        </Link>
                    </li>
               
                </div> 
                 } 
                
                
                  
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;