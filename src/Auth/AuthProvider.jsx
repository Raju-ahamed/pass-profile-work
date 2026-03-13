import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../component/firebase.inti';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loader, setLoader] = useState(true);
    const sginUpUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const sginOutUser=()=>{
        setLoader(true);
        return signOut(auth);
    }
    const goggleProvider = new GoogleAuthProvider();
    const sginUpGoggle =()=>{
        return signInWithPopup(auth,goggleProvider);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user is", user);
            setUsers(user)
            setLoader(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        users,
        loader,
        sginUpGoggle,
        sginUpUser,
        logInUser,
        sginOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;