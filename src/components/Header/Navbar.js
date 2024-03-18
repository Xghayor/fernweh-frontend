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
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </div>
      <div className="login-btn">
        <button><Link to="/login">LOGIN</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
