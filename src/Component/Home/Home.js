import React, { useEffect, useState } from 'react';
import Choice from '../Choiec/Choice';
import Feedback from '../Feedback/Feedback';
import Fotter from '../Fotter/Fotter';
import Sidebar from '../Seidebar/Siedbar';
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
          <Feedback></Feedback>
          <Choice></Choice>
          <Fotter></Fotter>
                 
        </div>
    );
};

export default Home;