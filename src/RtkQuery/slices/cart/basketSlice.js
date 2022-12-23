import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-param-reassign */
const basketSlice = createSlice({
  name: 'basket',
  initialState: { basket: [] },
  reducers: {
    addingToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removingFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload,
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in basket!`,
        );
      }
      state.basket = newBasket;
    },
    emptyingBasket: (state) => {
      state.basket = [];
    },
  },
});
/* eslint-enable no-param-reassign */

export const { addingToBasket, removingFromBasket, emptyingBasket } = basketSlice.actions;

export default basketSlice.reducer;
