import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Contexapi } from '../../App';
import Sidebar from '../Seidebar/Siedbar';
import Addadmin from '../Steap/Addadmin';
import Listoder from './Listoder/Listoder';
import Updatelist from './Updatelist/Updatelist';

  const Admin = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi);
    const [image, setImage] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const [per, setPer] =useState([])

    const onSubmit = data =>{

      const newData ={
        productName:data.name,
        price:data.price,
        dis:data.discription,
        img: image
      }
      // console.log(image);
      const url = `https://serene-river-88706.herokuapp.com/admin`;
     fetch(url, {
          method:"POST",
          headers:{
           "content-type":"application/json"
          },
          body: JSON.stringify(newData)
     })
     .then(res=>{
       console.log("client page res", res);
     })     
    };

    useEffect(() => {
        fetch(`https://serene-river-88706.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => {
           const chek  = data.filter(itm => itm.email === loginUser.email)
           setPer(chek)
            })
 
    }, [])

    console.log("check here email",per);

    const handelImge = event =>{
        console.log(event.target.files[0]);
        const imgData=  new FormData();
        imgData.set('key', '394ce6e69414d1addaaf0448eb7e5df7');
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
         imgData)
          .then(function (response) {
            setImage(response.data.data.display_url)
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
     

    }
    return (
<div className = "row" >
   
<div className="col-md-2 col-sm-6 col-12">
                 <Sidebar></Sidebar>
  </div>
           
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">

              
        <div className="col-md-4 ">
                <h1 style={{textAlign : "center", margin:"20px"}}>Add Service</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="product name"/>
        <br/>
        <input {...register("price")} type="text" defaultValue="$00" />
        <br/>
        <input {...register("discription")} type="text" placeholder="Discription" />
        <br/>

        <input {...register("img")} onBlur={handelImge} type="file" />
        <br/>
      <input type="submit" />
    </form> 
            </div>
     
    
    </div>

  
      
</div>
      
      
    );
  };
  
  export default Admin;