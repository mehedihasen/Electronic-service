import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../../App';
import Sidebar from '../../Seidebar/Siedbar';

const Updatelist = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setOrderlist(data))
 
    }, [])
    console.log(orderlist);


    const hendelDelet = (id) => {
        console.log(id);
      
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
     
        })
    
    } 
   



    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                 <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                      {
                orderlist.map(od =>
                    <table>
                        <tr>
                            <td>{od.name}</td>
                            <td>{od.productName}</td>
                            <td>{od.price}</td>
                            <td> <button onClick={()=>hendelDelet(`${od._id}`)}>delet</button> </td>
                        </tr>
                    </table>
                    )
            }
            </div>
         
      
        </div>
    );
};

export default Updatelist;