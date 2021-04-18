import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Contexapi } from '../../App';

const Praivet = ({ children, ...rest }) => {
    const [loginUser, setLoginUser] = useContext(Contexapi)

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


export default Praivet;