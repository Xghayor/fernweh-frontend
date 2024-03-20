import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/auth/loginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.login.token);

    const handleSubmit = (e) => {
        e.preventDefault();

        const credential = {
            user: {
                email: e.target.email.value,
                password: e.target.password.value 
            }
        };

        dispatch(loginUser(credential));
    };

    useEffect(() => {
        if(token)
            navigate('/');
    }, [token, navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
