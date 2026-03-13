import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
// import { useNavigate } from 'react-router';
import { Navigate, useLocation } from 'react-router';

const PriveatRoute = ({ children }) => {
    const { users, loader } = use(AuthContext);
    const location = useLocation()
    if (loader){
        return <span className="loading loading-bars loading-xl"></span>
    }
    // const navigate = useNavigate();
    if (!users) {
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;

};

export default PriveatRoute;