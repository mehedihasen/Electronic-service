import React from 'react';
import hederimg from "../../../image/heder.jpg"

const Heder = () => {
    return (
        <div class="row justify-content-evenly">
    <div class="col-4 mt-5">
      <h1 style={{color:"purple"}}>WELCOME </h1>
      <h1 style={{color: "red"}}>OUR SERVICE</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo obcaecati iure rerum quis ea! 
        Nihil commodi sapiente nobis minima, ad perspiciatis mollitia, esse cumque neque dolores ipsum, maiores doloribus.</h4>

    </div>

    <div class="col-4">
      <img src={hederimg} alt=""/>
    </div>
  </div>

    );
};

export default Heder;