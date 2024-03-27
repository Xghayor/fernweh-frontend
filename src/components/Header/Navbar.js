import { Link } from "react-router-dom";
import Profile from '../Profile/Profile'
import "./styles.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const token = useSelector((state) => state.login.token);
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="logo">
        <h1>FERNWEH</h1>
        <p>A Traveling Blog</p>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
        </ul>
      </div>
      <div className="login-btn">
        {token ? (
          <>
            <img onClick={toggleProfile} className="profile-img" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="u" />
            <Profile className={isOpen ? 'open' : 'hide'} toggleProfile={toggleProfile} />
          </>
        ) : (
          <Link to="/login" className="login-link" onClick={toggleProfile}>
            <button className="round-btn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
