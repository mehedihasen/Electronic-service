

import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import About from './Component/Admin/Admin';
import Admin from './Component/Admin/Admin';
import ProductDetile from './Component/ProductDetile/ProductDetile';
import Praivet from './Component/Praivet/Praivet';
import Book from './Component/Book/Book';
import Booking from './Component/Booking/Booking';
import Review from './Component/Review/Review';
import Testi from './Component/Testimonial/Testi';
import Addadmin from './Component/Steap/Addadmin';
import Deshbord from './Component/Deshbord/Deshbord';
import Updatelist from './Component/Admin/Updatelist/Updatelist';
import Listoder from './Component/Admin/Listoder/Listoder';


export const Contexapi = createContext()


function App() {

  const [loginUser, setLoginUser] = useState({})
  return (
    <Contexapi.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <div>

          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/testi">
              <Testi />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            <Praivet>
            <Route path="/admin">
                <Admin />
            </Route> 
            <Route path="/addadmin">
                <Addadmin />
            </Route> 
            <Route path="/updatelist">
                <Updatelist />
            </Route> 
            <Route path="/listoder">
                <Listoder/>
            </Route> 
              <Route path="/Book">
                <Book />
              </Route>
              <Route path="/deshbord">
                <Deshbord />
              </Route>
              <Route path="/Booking">
                <Booking />
              </Route>
              <Route path="/Review">
                <Review />
              </Route>
              <Route path="/productDetile/:pdname">
                <ProductDetile />
              </Route>  
            </Praivet>

            
           
              

          </Switch>
        </div>
      </Router>
    </Contexapi.Provider>
  );
}

export default App;
