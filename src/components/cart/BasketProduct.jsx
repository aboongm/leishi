import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removingFromBasket } from '../../RtkQuery/slices/cart/basketSlice';
import './BasketProduct.css';

/* eslint-disable object-curly-newline */
const BasketProduct = ({ id, title, price, image, rating, orderPage }) => {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(removingFromBasket(id));
    // toast.success('Item removed from basket');
  };
  /* eslint-enable object-curly-newline */

  const content = (
    <li className="checkoutProduct shadow-lg">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <span className="checkoutProduct__rating">
            {[...Array(rating).keys()].map((i) => (
              <p key={i + 1}>&#11088; </p>
            ))}
          </span>
        </div>
      </div>
      {!orderPage && (
        <button type="button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      )}
    </li>
  );
  return content;
};

BasketProduct.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  orderPage: PropTypes.bool.isRequired,
};

export default BasketProduct;
