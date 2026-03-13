import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthContext';

const SignUp = () => {
    const { sginUpUser } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        sginUpUser(email, password)
            .then(resutl => { console.log(resutl) })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl text-green-500 font-bold">Sign Up now!</h1>
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Enter your name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;