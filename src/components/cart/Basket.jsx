import React from 'react';
import { useSelector } from 'react-redux';
import './Basket.css';
import BasketProduct from './BasketProduct';
import Subtotal from './Subtotal';

const Basket = () => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);

  const content = (
    <div className="checkout">
      <div>
        <h2 className="checkout__hello">
          Hello
          {user.isLoggedIn ? user.user.fullname : 'Guest!'}
        </h2>
        <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
      <div className="checkout__details">
        <ul className="checkout__left">
          {basket.map((item) => (
            <BasketProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              orderPage={false}
            />
          ))}
        </ul>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );

  return content;
};

export default Basket;
