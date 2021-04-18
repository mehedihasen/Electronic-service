import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { Contexapi } from '../../App';

const Addminrout = ({ children, ...rest }) => {
    const [loginUser, setLoginUser] = useContext(Contexapi);
    const [per, setPer] =useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/admin`)
            .then(res => res.json())
            .then(data => {
              data.map(itm => setPer(itm.email))
            })
 
    }, [])
    console.log(per);


    return (
        <Route
        {...rest}
        render={({ location }) =>
        // || sessionStorage.getItem('token')
      loginUser.email  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};


export default Addminrout;