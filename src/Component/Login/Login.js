import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Contexapi } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config';
import "./login.css"

const Login = () => {
    const [loginUser, setLoginUser] = useContext(Contexapi)
    
    const history = useHistory()
    const location =useLocation()

    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
  
    const handelgoogleSingIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user;
                console.log("this is result", photoURL);
                const newUser ={
                    name:displayName,
                    email:email,
                    img: photoURL
                }
                setLoginUser(newUser)
               setUsertoken();
              history.replace(from)
      
            })
            .catch((error) => {

                const errCode = error.code;
                const errMessage = error.message;
                console.log(errCode, errMessage);
            });
            
    }
    const setUsertoken = (loginUser) => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
           sessionStorage.setItem("token", idToken)

          }).catch(function(error) {
            // Handle error
          });
    }
    return (
      <div>
          <h1>{loginUser.name}</h1>
          <button onClick={handelgoogleSingIn} className="auth">log in with google</button>
      </div>
    );
};

export default Login;