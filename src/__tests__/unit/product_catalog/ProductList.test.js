import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { useParams, BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
// import PulseLoader from 'react-spinners/PulseLoader';
import { createStore } from 'redux';
import ProductList from '../../../components/product_catalog/ProductList';
import { useGetProductsQuery } from '../../../RtkQuery/slices/product_catalog/productListSlice';

jest.mock('react-spinners/PulseLoader', () => {
  /* eslint-disable-line */
  const PropTypes = jest.requireActual('prop-types');

  function MockPulseLoader(props) {
    const { color, size } = props;
    return <div data-testid="loading-indicator" color={color} size={size} />;
  }

  MockPulseLoader.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  return MockPulseLoader;
});

jest.mock('../../../RtkQuery/slices/product_catalog/productListSlice', () => ({
  useGetProductsQuery: jest.fn(),
}));

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useParams: jest.fn(),
  };
});

const mockStore = createStore(() => ({
  products: [],
}));

describe('ProductList component', () => {
  afterEach(cleanup);

  it('should render the loading state', () => {
    useParams.mockReturnValue({ categoryId: '1' });
    useGetProductsQuery.mockReturnValue({
      data: [
        {
          id: 1,
          title: 'Product1',
          image: 'product1.jpg',
          price: 10,
          rating: 4,
        },
        {
          id: 2,
          title: 'Product2',
          image: 'product2.jpg',
          price: 20,
          rating: 5,
        },
      ],
      isLoading: true,
      isSuccess: false,
    });
    const { getByTestId } = render(
      <Router>
        <ProductList />
      </Router>,
    );
    expect(getByTestId('loading-indicator')).toHaveAttribute(
      'color',
      '#f50057',
    );
    expect(getByTestId('loading-indicator')).toHaveAttribute('size', '30');
  });

  it('should render the success state', () => {
    useParams.mockReturnValue({ categoryId: '1' });
    useGetProductsQuery.mockReturnValue({
      data: [],
      isLoading: false,
      isSuccess: true,
    });

    /* eslint-disable-next-line */
    const { getByText } = render(
      <Router store={mockStore}>
        <ProductList />
      </Router>,
    );
    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
