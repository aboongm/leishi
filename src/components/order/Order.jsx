import React from 'react';
import { useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import { useGetOrdersQuery } from '../../RtkQuery/slices/order/orderApiSlice';
import BasketProduct from '../cart/BasketProduct';

const Order = () => {
  const user = useSelector((state) => state.auth);
  const { data, isLoading, isSuccess } = useGetOrdersQuery(user.user.id);

  let content;
  if (isLoading) return <PulseLoader color="#f50057" size={30} />;

  /* eslint-disable comma-dangle */
  if (isSuccess) {
    const filterOrderList = data.filter(
      (order) => order.buyer_id === user.user.id
    );
    /* eslint-enable comma-dangle */

    content = (
      <section className="payment">
        <div className="payment__container">
          <div className="payment__container__inner">
            <div className="payment__section payment__order__1">
              <div className="payment__address">
                <p className="text-center">{user?.user.fullname}</p>
                <p className="text-center">{user?.user.address}</p>
              </div>
            </div>
            <div className="payment__section payment__order__3">
              <div className="payment__title">
                <h3>Ordered items and delivery details</h3>
              </div>
              <div className="payment__items">
                {filterOrderList.map((item) => (
                  <>
                    <h4 key={item.id}>
                      Order Amount:
                      {item.amount}
                    </h4>
                    {/* eslint-disable react/jsx-boolean-value */}
                    {item.purchase.map((product) => (
                      <BasketProduct
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        orderPage={true}
                      />
                    ))}
                    {/* eslint-enable react/jsx-boolean-value */}
                  </>
                ))}
              </div>
            </div>
            {/* <div className="payment__section payment__order__2">
            <div className="payment__details"></div>
          </div> */}
          </div>
        </div>
      </section>
    );
  }

  return content;
};

export default Order;
