import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
// import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const PriveatRoute = ({ children }) => {
    const { users, loader } = use(AuthContext);
    if (loader){
        return <span className="loading loading-bars loading-xl"></span>
    }
    // const navigate = useNavigate();
    if (!users) {
        return <Navigate to="/login"></Navigate>
    }
    return children;

};

export default PriveatRoute;