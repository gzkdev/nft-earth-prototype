import { Link, NavLink } from "react-router-dom";
import {
  FaSearch,
  FaWallet,
  FaRegUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="img-box"></div>
          NFTEarth
        </Link>
        <div className="input-box">
          <FaSearch className="search-icon" />
          <input
            type="search"
            name="s"
            id="s"
            placeholder="Search for a collection"
          />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">Stats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Sell</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">
                <FaRegUserCircle size={24} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">
                <FaShoppingCart size={24} />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">
                <FaWallet size={24} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
