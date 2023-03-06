import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn, handleLogout }) => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav__logo" to="/">Portfolio App</Link>
        <ul className="nav__list">
          {loggedIn && (
            <>
              <li className="nav__item">
                <Link to="/projects">My Projects</Link>
              </li>
              <li className="nav__item">
                <Link to="/skills">My Skills</Link>
              </li>
              <li className="nav__item">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
          {!loggedIn && (
            <>
              <li className="nav__item">
                <Link to="/login">Login</Link>
              </li>
              <li className="nav__item">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
