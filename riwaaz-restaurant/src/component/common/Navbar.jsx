import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  UserRound,
  LogOut,
  User,
} from "lucide-react";

import logo from "../../assets/logo/logo.jpg";
import { useAuth } from "../../context/useAuth";

const Navbar = () => {

  const { user, logout } = useAuth();

  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {

    await logout();

    setShowProfile(false);

    navigate("/login");
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">

          <img
            src={logo}
            alt="RIWAAZ Restaurant"
          />

        </Link>

        {/* Navigation */}
        <nav className="nav-links">

          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/menu">
            Menu
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/gallery">
            Gallery
          </NavLink>

          <NavLink to="/reservation">
            Reservation
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="navbar-actions">

          {/* Authentication */}
          {!user ? (

            /* Login */
            <Link
              to="/login"
              className="login-link"
            >
              Login
            </Link>

          ) : (

            /* Profile */
            <div className="profile-menu">

              <button
                type="button"
                className="profile-icon-btn"
                onClick={() =>
                  setShowProfile(!showProfile)
                }
                aria-label="Open profile menu"
              >

                <UserRound size={22} />

              </button>

              {/* Dropdown */}
              {showProfile && (

                <div className="profile-dropdown">

                  {/* User Info */}
                  <div className="profile-dropdown-user">

                    <div className="profile-avatar">
                      <UserRound size={20} />
                    </div>

                    <div className="profile-user-info">

                      <strong>
                        {user.fullName}
                      </strong>

                      <span>
                        {user.email}
                      </span>

                    </div>

                  </div>

                  <div className="profile-dropdown-divider"></div>

                  {/* My Profile */}
                  <button
                    type="button"
                    className="profile-dropdown-item"
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/profile");
                    }}
                  >

                    <User size={17} />

                    <span>
                      My Profile
                    </span>

                  </button>

                  {/* Logout */}
                  <button
                    type="button"
                    className="profile-dropdown-item logout-item"
                    onClick={handleLogout}
                  >

                    <LogOut size={17} />

                    <span>
                      Logout
                    </span>

                  </button>

                </div>

              )}

            </div>

          )}

          {/* Book a Table */}
          <Link
            to="/reservation"
            className="book-btn"
          >

            <span>
              Book a Table
            </span>

            <span className="btn-arrow">
              ↗
            </span>

          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;