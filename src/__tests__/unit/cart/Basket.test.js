import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from 'react-router-dom';
import Basket from '../../../components/cart/Basket';

const mockStore = configureStore([]);

describe('Basket component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      auth: {
        isLoggedIn: true,
        user: {
          fullname: 'John Doe',
        },
      },
      basket: {
        basket: [
          {
            id: 1,
            title: 'Product 1',
            image: 'product1.jpg',
            price: '20',
            rating: 4,
          },
        ],
      },
    });
  });

  it('renders the correct content', () => {
    render(
      <Provider store={store}>
        <Router>
          <Basket />
        </Router>
      </Provider>,
    );
    const hello = screen.getByText('Hello John Doe');
    const title = screen.getByText('Your Shopping Basket');
    const productTitle = screen.getByText('Product 1');

    expect(hello).toBeTruthy();
    expect(title).toBeTruthy();
    expect(productTitle).toBeTruthy();
  });
});
