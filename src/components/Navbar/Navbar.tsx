import { Link, NavLink } from "react-router-dom";
import {
  FaSearch,
  FaWallet,
  FaRegUserCircle,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <div className="img-box"></div>
          NFTEarth
        </Link>
        <div className="input-box" data-visible={showSearchBar}>
          <FaSearch className="search-icon" />
          <button className="close-btn" onClick={() => setShowSearchBar(false)}>
            <FaTimes />
          </button>
          <input
            autoComplete="off"
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
        <div className="menu-box">
          <button className="menu-btn" onClick={() => setShowSearchBar(true)}>
            <FaSearch size={18} />
          </button>
          <button className="menu-btn">
            <FaBars size={18} onClick={() => setShowMobileMenu(true)} />
          </button>
        </div>
        <div className="mobile-menu" data-active={showMobileMenu}>
          <div className="mb-menu-title">Menu</div>
          <button
            className="close-menu-btn"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes />
          </button>
          <div className="mb-nav">
            <Link to="/">Home</Link>
            <Link to="/">Sell</Link>
            <Link to="/">Stats</Link>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
