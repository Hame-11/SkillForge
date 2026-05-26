import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext.jsx';
import styles from './Layout.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
  <span className={styles.logoAccent}>S</span>kill
  <span className={styles.logoAccent}>F</span>orge
       </Link>
        
        <div className={styles.navLinks}>
          {user ? (
            <>
              {isDashboardPage ? (
                <Link to="/">Home</Link>
              ) : (
                <Link to="/dashboard">Dashboard</Link>
              )}
              <span className={styles.userName}>👋 {user.name}</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;