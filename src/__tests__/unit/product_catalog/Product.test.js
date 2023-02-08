import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from '../../../../components/product_catalog/Product';
// import { addingToBasket } from '../../../../RtkQuery/slices/cart/basketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
}));

describe('Product component', () => {
  it('renders the product details correctly', async () => {
    const product = {
      id: 1,
      title: 'Test Product',
      image: 'image.png',
      price: '100',
      rating: 5,
    };

    /* eslint-disable react/jsx-props-no-spreading */
    render(<Product {...product} />);

    // Check if product price is displayed correctly
    await waitFor(() => {
      expect(screen.getByText('100')).toBeInTheDocument();
    });

    // Check if product title is displayed correctly
    const title = await waitFor(() => screen.getByText(product.title));
    expect(title).toBeInTheDocument();

    // // Check if product rating is displayed correctly
    const ratingNodes = screen.getAllByText(/⭐/);
    const rating = ratingNodes.filter((node) => node.textContent.length);

    expect(rating.length).toBe(product.rating);

    // // Check if add to basket button is present
    const addToBasketButton = screen.getByRole('button', {
      name: 'Add to Basket',
    });
    expect(addToBasketButton).toBeInTheDocument();

    // // Test add to basket functionality
    // const dispatch = require('react-redux').useDispatch;
    // const dispatchSpy = jest.spyOn(dispatch, 'mockImplementation');
    // addToBasketButton.click();
    // expect(dispatchSpy).toHaveBeenCalledWith(addingToBasket(product));
  });
});
