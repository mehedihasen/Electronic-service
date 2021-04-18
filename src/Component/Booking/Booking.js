import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../App';

const Booking = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`http://localhost:5000/oder`)
            .then(res => res.json())
            .then(data => {
                const oder = data.filter(od=> od.name === loginUser.name)
                setOrderlist(oder)
                console.log(oder);
                
            })
    }, [])
    return (
        <div className="container row">
        <h1 style={{textAlign : "center", margin:"20px"}}> Total List</h1>
            {
                orderlist.map(od =>  
                <div className="sty">
                    <table>
                     
                           <tr>
                           <td><h3>ProducName :- {od.productName}</h3> </td> 
                            <td> <h3>price :- {od.price}</h3></td> 
                            <td>  <h3>Ststus: Pending</h3></td>
                           </tr>
                            
                        
                    </table>
        
                </div>)
            }
        </div>
    );
};

export default Booking;