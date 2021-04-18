import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import "./productdetile.css"


const ProductDetile = () => {
    const {pdname} =useParams()
    const [service, setService] =useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(res => res.json())
            .then(data => {
                const Serv = data.find(ser=> ser.productName === pdname)
                setService(Serv)
                
            })
    }, [])
    return (
        
      <div className="container-fluid row ">
             <div className="col-md-2 maine">
                <ul>
                    <li><Link to ="/Book" className="link">book</Link></li>
                    <li><Link to ="/Booking" className="link">Booking</Link></li>
                    <li><Link to ="/review" className="link">Review</Link></li>
                </ul>   
                </div>
                <div className="col-md-8">
                    <Book ser = {service}></Book>
                </div> 
        
        </div>  
      
    
    );
};

export default ProductDetile;