import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
    })
    return () => unSubscribe();
  },[])

    const LogOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const AuthInfo = {
        user, providerLogin, createUser,LogOut,loading, login
    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;