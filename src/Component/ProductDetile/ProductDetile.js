import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Book from '../Admin/Book/Book';
import "./productdetile.css"


const ProductDetile = () => {
    const {pdname} =useParams()
    const [service, setService] =useState([])

    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => {
                const Serv = data.find(ser=> ser.productName === pdname)
                setService(Serv)
                
            })
    }, [])
    return (
        
      <div className="container-fluid row ">
                    <Book ser = {service}></Book>
                
        
        </div>  
      
    
    );
};

export default ProductDetile;