import React from 'react';
import hederimg from "../../../image/heder.jpg"

const Heder = () => {
    return (
        <div class="row justify-content-evenly">
    <div class="col-4 justify-content-center">
      <h1 style={{color:"purple"}}>WELCOME </h1>
      <h1 style={{color: "red"}}>OUR SERVICE</h1>

    </div>

    <div class="col-4">
      <img src={hederimg} alt=""/>
    </div>
  </div>

    );
};

export default Heder;