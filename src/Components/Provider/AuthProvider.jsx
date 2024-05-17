import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    
const logOut=()=>{
   return signOut(auth);
   
}


    //observe auth state change 
  useEffect(()=>{

    const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
setUser(currentUser);
console.log('i am obserbing users login or not ',currentUser);
    });
    return ()=>{
        (unSubscribe);
    }
    

  },[])

    const authInfo = { 
        user,
        createUser ,
        singInUsers ,
        logOut
    }

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