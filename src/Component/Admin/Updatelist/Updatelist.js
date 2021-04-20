import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../../App';
import Sidebar from '../../Seidebar/Siedbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Updatelist = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setOrderlist(data))
 
    }, [])
    console.log(orderlist);


    const hendelDelet = (id, e) => {
        console.log(id);
        console.log(e);
      
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
     
        })
    
    } 
    console.log("oder list updste" , orderlist);
   



    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                 <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center sec">

            
                   <div>
                       <h1 style={{ textAlign: "center", margin: "20px" }}> Update Product</h1>
                   {
                orderlist.map(od =>
              
                    <table>
                    <tr>
                    
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Modify</th>
                    </tr>
                        <tr>
                          
                            <td>{od.productName}</td>
                            <td>{od.price}</td>
                            <td> <button onClick={()=>hendelDelet(`${od._id}`)} style={{border:"none"}}>  <FontAwesomeIcon icon={faTrashAlt}  style={{fontSize :"20px"}} /></button> </td>
                         
                        </tr> 
                         
                    </table>
                
                    
                    )
            }
                   </div>
            </div>
         
      
        </div>
    );
};

export default Updatelist;