import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../component/firebase.inti';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const sginUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const sginOutUser=()=>{
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user is", user);
            setUsers(user)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        users,
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