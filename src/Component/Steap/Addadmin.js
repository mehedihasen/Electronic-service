import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Seidebar/Siedbar';


const Addadmin = () => {
    
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
        const newData ={
            name: data.name,
            email:data.email,

          }
          // console.log(image);
          const url = `https://serene-river-88706.herokuapp.com/addmin`;
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
        <div className = "row">
            <div className="col-md-2 col-sm-6 col-12">
                 <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">

           
  <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="write your name "/>    
        <br/>
        <input {...register("email")}  defaultValue="weite your  email"/>    
        <br/>
      <input type="submit"/>
    </form> 
     </div>
           
            
   
        </div>
    );
};

export default Addadmin;