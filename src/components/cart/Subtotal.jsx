import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasketTotal } from '../../RtkQuery/slices/cart/helpers';
import './Subtotal.css';

const Subtotal = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);

  const handlePayment = () => {
    if (user.user) {
      navigate('/payment');
    } else {
      // toast.error('Please login first!');
      navigate('/login');
    }
  };

  /* eslint-disable react/jsx-one-expression-per-line */
  const content = (
    <div className="subtotal shadow-lg">
      <p>
        Subtotal ({basket.length}
        items)
        <strong>
          &#8377;
          {getBasketTotal(basket)}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={handlePayment} type="button">
        Proceed to Checkout
      </button>
    </div>
  );
  /* eslint-enable react/jsx-one-expression-per-line */
  return content;
};

export default Subtotal;
