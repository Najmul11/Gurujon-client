import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext=createContext()
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const githubProvider=new GithubAuthProvider()


const AuthProvider = (props) => {
    const [user, setUser]=useState(null)
    // create user
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email/pass signin
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google popup signin
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // github popup signin
    const signInWithGithub=()=>{
        return signInWithPopup(auth, githubProvider)
    }
    // auth state observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])
    //  signout
    const logout=()=>{
        return signOut(auth)
    }
    const AuthInfo={user, signInWithGoogle, signInWithGithub, createUser, signIn, logout}
    return (
       <AuthContext.Provider value={AuthInfo}>
            {props.children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;