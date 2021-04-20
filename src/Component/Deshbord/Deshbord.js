import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../App';
import Listoder from '../Admin/Listoder/Listoder';
import Booking from '../Booking/Booking';
import "../Seidebar/Siedbar"
import Sidebar from '../Seidebar/Siedbar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
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
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                {
                    per.length>0 ?   
                <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center sec">
                     <Listoder></Listoder>
                </div> 
                  : 
                
                  <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center sec">
                    <Booking></Booking>
                </div>
                     
                
                } 

               
                 
               
            </div>
        </section>
    );
};

export default Dashboard;