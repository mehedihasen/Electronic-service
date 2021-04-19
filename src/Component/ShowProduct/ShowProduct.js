import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./showpd.css"

const ShowProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className ='continer row'>
            <h1 style={{textAlign : "center", margin:"20px"}}>Oure Service</h1>
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