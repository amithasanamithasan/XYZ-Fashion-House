import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";




export const AuthContext=createContext('null');

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   

    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);


    const createUser=(email,password)=>
    {
        setLoading(true);
     return createUserWithEmailAndPassword(auth ,email,password);
    }

    const singInUsers=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }
    const singInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleprovider);
    }
    
const logOut=()=>{
    setLoading(true);
   return signOut(auth);
   
}


    //observe auth state change 
  useEffect(()=>{

    const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
setUser(currentUser);
console.log('i am obserbing users login or not ',currentUser);
setLoading(false);
    });
    return ()=>{
        (unSubscribe);
    }
    

  },[])

    const authInfo = { 
        user,
        loading,
        createUser ,
        singInUsers ,
        singInWithGoogle,
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