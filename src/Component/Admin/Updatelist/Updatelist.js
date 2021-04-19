import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../../App';
import Sidebar from '../../Seidebar/Siedbar';

const Updatelist = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/oder`)
            .then(res => res.json())
            .then(data => setOrderlist(data))
 
    }, [])
    console.log(orderlist);
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
                            <td> <button>delet</button> </td>
                        </tr>
                    </table>
                    )
            }
            </div>
         
      
        </div>
    );
};

export default Updatelist;