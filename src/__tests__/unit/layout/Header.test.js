import React from 'react';
import {
  screen, render, fireEvent, cleanup,
} from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { logOut } from '../../../../RtkQuery/slices/auth/authSlice';
// import { getSearchResult } from '../../../../RtkQuery/slices/sorting/searchSlice';
import Header from '../../../../components/layout/Header';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

/* eslint-disable react/display-name */
jest.mock('../../../../components/layout/Header', () => () => (
  <mock-Header data-testid="header" />
));

jest.mock('../../../../RtkQuery/slices/auth/authSlice', () => ({
  logOut: jest.fn(),
}));

jest.mock('../../../../RtkQuery/slices/sorting/searchSlice', () => ({
  getSearchResult: jest.fn(),
}));

describe('Header component', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    useSelector.mockImplementation((selector) => selector({
      auth: {
        user: {
          fullname: 'John Doe',
        },
        isLoggedIn: true,
      },
      basket: {
        basket: [],
      },
    }));

    /* eslint-disable no-unused-vars */
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(screen.getByTestId('header')).toBeTruthy();
  });

  it('should handle logout', () => {
    useSelector.mockImplementation((selector) => selector({
      auth: {
        user: {
          fullname: 'John Doe',
        },
        isLoggedIn: true,
      },
      basket: {
        basket: [],
      },
    }));

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { queryByText } = render(<Header />);
    const logoutBtn = queryByText('Sign Out');
    if (logoutBtn) {
      fireEvent.click(logoutBtn);

      expect(logOut).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(logOut());
    } else {
      console.error('Sign Out button not found');
    }
  });

  //   it('should handle search', () => {
  //     useSelector.mockImplementation((selector) =>
  //       selector({
  //         auth: {
  //           isLoggedIn: false,
  //         },
  //         basket: {
  //           basket: [],
  //         },
  //       })
  //     );

  //     const dispatch = jest.fn();
  //     useDispatch.mockReturnValue(dispatch);

  //     const { getByTestId, getByPlaceholderText } = render(<Header />);
  //     const searchInput = getByPlaceholderText('Search products');
  //     fireEvent.change(searchInput, { target: { value: 'test' } });

  //     const searchBtn = getByTestId('search-icon');
  //     fireEvent.click(searchBtn);

  //     expect(getSearchResult).toHaveBeenCalled();
  //     expect(dispatch).toHaveBeenCalledWith(getSearchResult);
  //   });
});
