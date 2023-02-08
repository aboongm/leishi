import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from '../../../../components/sorting/Search';

const state = {
  search: {
    search: [
      {
        id: 1,
        title: 'Test Product 1',
        image: 'test_image_1.jpg',
        price: 100,
        rating: 4,
      },
      {
        id: 2,
        title: 'Test Product 2',
        image: 'test_image_2.jpg',
        price: 200,
        rating: 5,
      },
    ],
  },
};

const store = createStore(() => state);

describe('Search component', () => {
  test('renders search results correctly', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );

    expect(screen.getByText('Search Results')).toBeTruthy();
    expect(screen.getByText('Test Product 1')).toBeTruthy();
    expect(screen.getByText('Test Product 2')).toBeTruthy();
  });
});
