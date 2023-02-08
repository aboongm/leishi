import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../../../components/product_catalog/Home';
import { useGetCategoriesQuery } from '../../../../RtkQuery/slices/product_catalog/categorySlice';

jest.mock('react-spinners/PulseLoader', () => {
  /* eslint-disable-line */
  const PropTypes = jest.requireActual('prop-types');

  function MockPulseLoader(props) {
    const { color, size } = props;
    return <div data-testid="indicator" color={color} size={size} />;
  }

  MockPulseLoader.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  return MockPulseLoader;
});

jest.mock('../../../../RtkQuery/slices/product_catalog/categorySlice', () => ({
  useGetCategoriesQuery: jest.fn(),
}));

describe('Home component', () => {
  afterEach(cleanup);

  it('should render the loading state', () => {
    useGetCategoriesQuery.mockReturnValue({
      data: [],
      isLoading: true,
      isSuccess: false,
    });
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(getByTestId('loading-indicator').firstChild).toHaveAttribute(
      'color',
      '#f50057',
    );
    expect(getByTestId('loading-indicator').firstChild).toHaveAttribute(
      'size',
      '30',
    );
  });

  it('should render the success state', () => {
    useGetCategoriesQuery.mockReturnValue({
      data: [
        {
          id: 1,
          code_number: 123,
          title: 'Category 1',
          image: 'image1.jpg',
        },
        {
          id: 2,
          code_number: 456,
          title: 'Category 2',
          image: 'image2.jpg',
        },
      ],
      isLoading: false,
      isSuccess: true,
    });
    const { getByAltText, getByText } = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(getByAltText(/banner/i)).toBeInTheDocument();
    expect(getByText(/Category 1/i)).toBeInTheDocument();
    expect(getByText(/Category 2/i)).toBeInTheDocument();
  });
});
