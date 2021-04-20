import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Payment from '../../Peyment/Payment';
import './book.css'
import { Contexapi } from '../../../App';
import Sidebar from '../../Seidebar/Siedbar';


const Book = ({ser}) => {
    const { register, handleSubmit} = useForm();
    const [loginUser, setLoginUser] = useContext(Contexapi)
    const [data, setData] =useState(null)

    const onSubmit = data =>{
      setData(data)
    };

    const handelPay = payId =>{
      const newData ={
        productName:ser.productName,
        name: data.name,
        price:ser.price,
        userinfo: loginUser,
        pruduinfo: ser,
        add:data.add,
        payId
       
      }
      // console.log(image);
      const url = `https://serene-river-88706.herokuapp.com/oder`;
     fetch(url, {
          method:"POST",
          headers:{
           "content-type":"application/json"
          },
          body: JSON.stringify(newData)
     })
     .then(res=>{
      console.log(res);
     })     
    }
    return (
        <div className="row" >
          <div className="col-md-2 col-sm-6 col-12">
                 <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
        <div className="col-md-8 sec" style={{display: data? "none" : "block"}}>
       
            <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} value={loginUser.name}/>    
        <br/>
        <input {...register("productName")}  value={ser.productName}/>    
        <br/>
        <input {...register("pric")} type="text" Value={ser.price}/>
        <br/>
        <input {...register("add")} type="text" placeholder="giv your current addrs" />
        <br/>
      <input type="submit"/>
    </form> 
    </div>

     <div style={{display: data? "block" : "none"}}>
       <Payment handelPayment={handelPay}></Payment> 
     </div>

            </div>
 
        </div>
    );
};

export default Book;