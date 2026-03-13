import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
// import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

const PriveatRoute = ({ children }) => {
    const { users } = use(AuthContext);
    // const navigate = useNavigate();
    if (!users) {
        return <Navigate to="/login"></Navigate>
    }
    return children;

};

export default PriveatRoute;