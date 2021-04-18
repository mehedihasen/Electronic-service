import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Contexapi } from '../../App';

const Review = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    console.log(loginUser);
    const { register, handleSubmit} = useForm();
    const onSubmit = data =>{
        const newData ={

            photo : loginUser.img,
            name: loginUser.name,
            comment:data.comment,

          }
          // console.log(image);
          const url = `http://localhost:5000/review`;
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
        <input {...register("name")} value={loginUser.name}/>    
        <br/>
        <input {...register("comment")} type="text" placeholder="Write you feedbck" defaultValue='“I really appreciated how you used check-ins to keep me up to date on your project this week. It helped me coordinate with our stakeholders, and I’m excited to share that we’re on track to launch.”

' />
        <br/>
      <input type="submit"/>
    </form> 
            
        </div>
    );
};

export default Review;