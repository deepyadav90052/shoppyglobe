import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go to Homepage</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    marginTop: '20px',
    display: 'inline-block',
  },
};

export default NotFound;
