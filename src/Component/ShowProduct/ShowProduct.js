import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./showpd.css"

const ShowProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className ='continer row'>
            {
                product.map(pd => 
                <div className=" col-md-3 sty ">
                <img src={pd.img} alt=""/>
                <h3>{pd.productName}</h3>
                <h3>{pd.price}</h3>
                <h4>{pd.des}</h4>
                <Link to={`/productDetile/${pd.productName}`}>productDetaile</Link> 
            </div>)
            }
            
            
        </div>
    );
};

export default ShowProduct;