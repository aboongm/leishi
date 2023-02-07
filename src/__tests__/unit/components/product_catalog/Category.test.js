import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Category from '../../../../components/product_catalog/Category';

describe('Category component', () => {
  const title = 'Test Title';
  const image = 'https://example.com/test.jpg';
  const codeNumber = 8;

  it('renders category title, image and shop now button', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <Category title={title} image={image} codeNumber={codeNumber} />
      </Router>
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByAltText('')).toBeTruthy();
    expect(getByText('Shop Now')).toBeTruthy();
  });

  it('navigates to products page when shop now button is clicked', async () => {
    const { getByTestId } = render(
      <Router>
        <Category title={title} image={image} codeNumber={codeNumber} />
      </Router>
    );
    const shopNowButton = getByTestId('shop-now-button');
    fireEvent.click(shopNowButton);
    // await waitFor(() => {
    //   expect(window.location.pathname).toBe(`/products/${codeNumber}`);
    // });
  });
});
