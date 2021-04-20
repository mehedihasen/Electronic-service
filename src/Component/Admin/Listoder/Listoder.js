import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../../App';
import Sidebar from '../../Seidebar/Siedbar';

const Listoder = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/oder`)
            .then(res => res.json())
            .then(data => setOrderlist(data))
 
    }, [])
    console.log(orderlist);
    return (
        <div className="container row">

<h1 style={{ textAlign: "center", margin: "20px" }}> Product List</h1>
          
        
      
      {
                orderlist.map(od =>
               
                 <div>
                    <table >
                      <tr>
                        <td>{od.name}</td>
                        <td>{od.productName}</td>
                        <td>{od.price}</td>
                        <td>Done</td>
                      </tr>
                   
                </table>
                 </div>
                
                    )
            }
     
       
        </div>
    );
};

export default Listoder;