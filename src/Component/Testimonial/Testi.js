import React, { useEffect, useState } from 'react';
import "./Testi.css"

const Testi = () => {
    const [Usercommint, setUsercommint] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setUsercommint(data))
    }, [])
    return (
        <div className ="mine">
            {
                Usercommint.map(com => 
                <div className="continer row">
                    <div className="card col-md-3 sty">
                        <img src={com.photo} alt=""/>
                        <h4>{com.comment}</h4>
                        <h2>{com.name}</h2>
                    </div>

                </div> )
            }
        </div>
    );
};

export default Testi;