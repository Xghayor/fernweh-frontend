import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/auth/loginSlice";

const Profile = () => {
  const user = useSelector((state) => state.login.user);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && user) { // Only dispatch if token exists and user doesn't
      dispatch(getUser({ token, userId: user.id }));
    }
  }, [token]); // Dispatch only when token changes

  if (!token || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.image} alt="image" />
    </div>
  );
};

export default Profile;
