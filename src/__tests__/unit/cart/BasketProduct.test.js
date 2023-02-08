import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useDispatch } from 'react-redux';
import BasketProduct from '../../../components/cart/BasketProduct';
import { removingFromBasket } from '../../../RtkQuery/slices/cart/basketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('BasketProduct component', () => {
  afterEach(cleanup);

  it('renders basket product info', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByText, getByAltText } = render(
      <BasketProduct
        id={1}
        title="Test Product"
        price="100"
        image="test-image.jpg"
        rating={4}
        orderPage={false}
      />,
    );

    expect(getByAltText('')).toHaveAttribute('src', 'test-image.jpg');
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('Remove from Basket')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
  });

  it('dispatches the correct action when removing from basket', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    const { getByText } = render(
      <BasketProduct
        id={1}
        title="Test Product"
        price="100"
        image="test-image.jpg"
        rating={4}
        orderPage={false}
      />,
    );

    const removeButton = getByText('Remove from Basket');
    removeButton.click();

    expect(mockDispatch).toHaveBeenCalledWith(removingFromBasket(1));
  });

  it('does not render remove button on order page', () => {
    const { queryByText } = render(
      <BasketProduct
        id={1}
        title="Test Product"
        price="100"
        image="test-image.jpg"
        rating={4}
        orderPage
      />,
    );

    expect(queryByText('Remove from Basket')).toBeNull();
  });
});
