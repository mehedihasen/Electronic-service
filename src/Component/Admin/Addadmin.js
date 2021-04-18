import React, { useContext } from 'react';
import { useForm } from "react-hook-form";


const Addadmin = () => {
    
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
        const newData ={
            name: data.name,
            email:data.email,

          }
          // console.log(image);
          const url = `http://localhost:5000/addmin`;
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
      
      };
    
    return (
        <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="write your name "/>    
        <br/>
        <input {...register("email")}  defaultValue="weite your  email"/>    
        <br/>
      <input type="submit"/>
    </form> 
            
        </div>
    );
};

export default Addadmin;