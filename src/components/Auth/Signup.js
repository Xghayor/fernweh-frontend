import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../Redux/auth/signupSlice';
import './styles.css'

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      user: {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.password_confirmation.value,
      }
    };
    
    dispatch(registerUser(credentials))
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Registration Failure:', error);
      });
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
      <input className="login-input" type="text" name="name" placeholder="Username" />
      <input className="login-input" type="text" name="email" placeholder="Email" />
      <input className="login-input" type="password" name="password" placeholder="Password" />
      <input className="login-input" type="password" name="password_confirmation" placeholder="Confirm password" />
      <button type="submit">Register</button>
    </form>
    </div>
    
  );
};

export default Signup;
