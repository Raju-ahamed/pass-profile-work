import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { logInUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password).then(() => {
            navigate(location?.state || "/")
        })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p>Create a new Account <span className='underline text-blue-500'><Link to={'/signup'}>Sgin Up</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;