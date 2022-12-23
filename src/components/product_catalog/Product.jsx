import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './Product.css';

/* eslint-disable object-curly-newline */
const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    const data = { id, title, image, price, rating };
    dispatch();
    if (data) {
      //   toast.success('Item added to basket');
      console.log('Item added to basket');
    }
  };
  /* eslint-enable object-curly-newline */

  const content = (
    <li className="product shadow-lg">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <span className="product__rating">
            {[...Array(rating).keys()].map((i) => (
              <p key={i + 1}>&#11088; </p>
            ))}
          </span>
        </div>
      </div>
      <button onClick={addToBasket} type="button">
        Add to Basket
      </button>
    </li>
  );

  return content;
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Product;
