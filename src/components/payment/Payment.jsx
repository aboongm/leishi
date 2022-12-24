import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BasketProduct from '../cart/BasketProduct';
import { getBasketTotal } from '../../RtkQuery/slices/cart/helpers';
import { emptyingBasket } from '../../RtkQuery/slices/cart/basketSlice';
import './Payment.css';

const Payment = () => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [addOrders] = useAddOrdersMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //   addOrders({
    //     buyer_id: user.user.id,
    //     amount: getBasketTotal(basket),
    //     purchase: basket,
    //   });

    dispatch(emptyingBasket());
    navigate('/orders');
  };

  const content = (
    <section className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {basket?.length}
            items
          </Link>
          )
        </h1>
        <div className="payment__container__inner">
          <div className="payment__section payment__order__1">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p className="text-center">{user?.user.fullname}</p>
              <p className="text-center">{user?.user.address}</p>
            </div>
          </div>
          <div className="payment__section payment__order__3">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <BasketProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section payment__order__2">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <div className="payment__priceContainer">
                  <h3>
                    Order Total: &#8377;
                    {getBasketTotal(basket)}
                  </h3>
                  <button type="submit">
                    <span>Buy Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return content;
};

export default Payment;
