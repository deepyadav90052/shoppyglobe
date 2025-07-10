import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.logo}>ShoppyGlobe</Link>
      <nav>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/cart" style={styles.navLink}>
          🛒 Cart ({itemCount})
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '15px 30px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  navLink: {
    marginLeft: '15px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
