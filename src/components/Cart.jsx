import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) return <p style={{ padding: '20px' }}>🛒 Your cart is empty.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍️ Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              style={styles.input}
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      <hr />
      <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
  input: {
    width: '50px',
    marginRight: '10px',
  },
};

export default Cart;
