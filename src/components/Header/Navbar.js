import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {


  return (
    <nav>
      <div className="logo">
      <h1>FERNWEH</h1>
      <p>A Traveling Blog</p>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/article">Article</Link></li>
        </ul>
      </div>
      <div className="login-btn">
        <Link to="/profile">
          <img className="profile-img" src= "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="u" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
