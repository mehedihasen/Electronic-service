import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import Testi from '../Testimonial/Testi';
import Heder from './Heder/Heder';
import Navber from './Navber/Navber';

const Home = () => {
    
    return (
        <div>
           <Navber></Navber>
           <Heder></Heder>
          <ShowProduct></ShowProduct>
          <Testi></Testi>
         
           
        </div>
    );
};

export default Home;