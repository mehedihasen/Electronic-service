import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

  const Admin = () => {
    const [image, setImage] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{

      const newData ={
        productName:data.name,
        price:data.price,
        dis:data.discription,
        img: image
      }
      // console.log(image);
      const url = `http://localhost:5000/admin`;
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
      <div>
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
    );
  };
  
  export default Admin;