import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Product fetch error:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <div style={styles.details}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '30px',
    gap: '30px',
  },
  image: {
    width: '300px',
    objectFit: 'contain',
  },
  details: {
    maxWidth: '600px',
  },
};

export default ProductDetail;
