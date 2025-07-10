import React from 'react';
import { Link } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products.</p>;

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
          <Link to={`/product/${product.id}`} style={styles.link}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    colo: '#000',
    overflow: 'hidden',
  },
  image: {
    height: '150px',
    objectFit: 'contain',
    marginBottom: '10px',
    width: '100%',
    display: 'block',
    margin: '0 auto',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    textDecoration: 'none',
    color: 'blue',
  },
};

export default ProductList;
