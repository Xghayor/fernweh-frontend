import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/auth/loginSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/auth/loginSlice";

const Profile = () => {
  const user = useSelector((state) => state.login.user);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      dispatch(getUser(user.id));
    }
  }, [token]);
  

  if (!token || !user) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(logout())
    navigate('/');
  }
  

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.image} alt="image" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
