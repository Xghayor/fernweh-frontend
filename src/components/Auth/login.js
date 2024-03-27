import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../Redux/auth/loginSlice';
import './styles.css'

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
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="login-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <p className="signup-btn">
            If you're not registered, please <Link to="/signup">Sign Up</Link> first.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
