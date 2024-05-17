import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext=createContext('null');

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);


    const createUser=(email,password)=>
    {
     return createUserWithEmailAndPassword(auth ,email,password);
    }

    const singInUsers=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

    }
  useEffect(()=>{

      onAuthStateChanged(auth,currentUser=>{
setUser(currentUser);
console.log('i am obserbing users login or not ',currentUser);
    })

  },[])

    const authInfo={ user,createUser ,singInUsers}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}