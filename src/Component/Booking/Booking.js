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
        <div>
            <h1>this is oder list</h1>
            {
                orderlist.map(od =>  
                <div className="subcard ">
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