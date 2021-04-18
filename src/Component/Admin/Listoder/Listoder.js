import React, { useContext, useEffect, useState } from 'react';
import { Contexapi } from '../../../App';

const Listoder = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [orderlist, setOrderlist] = useState([])
 
    useEffect(() => {
        fetch(`http://localhost:5000/oder`)
            .then(res => res.json())
            .then(data => setOrderlist(data))
 
    }, [])
    console.log(orderlist);
    return (
        <div>
            {
                orderlist.map(od =>
                    <table>
                        <tr>
                            <td>{od.name}</td>
                            <td>{od.productName}</td>
                            <td>{od.price}</td>
                            <td>Status</td>
                        </tr>
                    </table>
                    )
            }
        </div>
    );
};

export default Listoder;