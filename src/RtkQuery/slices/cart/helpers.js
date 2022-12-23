export const getBasketTotal = (basket) => basket?.reduce(
  (amount, item) => parseInt(item.price, 10) + parseInt(amount, 10),
  0,
);

export default getBasketTotal;
