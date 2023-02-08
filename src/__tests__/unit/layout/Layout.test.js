import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Layout from '../../../../components/layout/Layout';

/* eslint-disable react/display-name */
jest.mock('../../../../components/layout/Header', () => () => (
  <mock-Header data-testid="header" />
));

/* eslint-disable react/display-name */
jest.mock('../../../../components/layout/Footer', () => () => (
  <mock-Footer data-testid="footer" />
));

describe('Layout', () => {
  it('renders header, outlet, and footer components', () => {
    const { getByTestId } = render(
      <Router>
        <Layout />
      </Router>,
    );

    expect(getByTestId('header')).toBeTruthy();
    expect(getByTestId('footer')).toBeTruthy();
  });
});
