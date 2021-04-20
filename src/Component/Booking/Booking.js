import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../App';
import './booking.css'

const Booking = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/oder`)
            .then(res => res.json())
            .then(data => {
                const oder = data.filter(od=> od.name === loginUser.name)
                setOrderlist(oder)
              
                
            })
    }, [])
    return (
        <div className="row container">

        <h1 style={{textAlign : "center", margin:"20px"}}> Total List</h1>
       
            {
                orderlist.map(od =>  
             
                    <table>
               
                    <tr>
                           <td> {od.productName} </td> 
                            <td>{od.price}</td> 
                            <td> Pending</td>
                    </tr>
                    </table>
        
                )
            }
        </div>
    );
};

export default Booking;