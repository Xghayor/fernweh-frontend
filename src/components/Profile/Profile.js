import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/auth/loginSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/loginSlice";
import "./styles.css";

const Profile = ({ className, toggleProfile }) => {
  const user = useSelector((state) => state.login.user);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      dispatch(getUser(user.id));
    } else if (!token || !user) {
      navigate('/login');
    }
  }, [token, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`profile-container ${className}`}>
      <div className="profile-content">
        <button className="close-button" onClick={toggleProfile}>X</button>
        <div className="profile-image-container">
          <img src={user.image} alt={user.name} />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
