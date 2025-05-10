import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/image.png';

const Navbar = () => {
  const navigate = useNavigate();

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#0b1c38',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Poppins, sans-serif',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    logo: {
      width: '32px',
      height: '32px',
      marginRight: '10px',
    },
    title: {
      color: '#00e6c3',
      fontWeight: '600',
      fontSize: '1.4rem',
    },
    links: {
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      color: '#cfd9e0',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      position: 'relative',
    },
    activeLink: {
      color: '#00e6c3',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer} onClick={() => navigate('/')}>
        <img src={logo} alt="logo" style={styles.logo} />
        <span style={styles.title}>TradeZen</span>
      </div>
      <div style={styles.links}>
        <NavLink
          to="/market"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Market
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/tutorials"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Tutorials
        </NavLink>
        <NavLink
          to="/competitions"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Competitions
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
