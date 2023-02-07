import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Category from '../../../../components/product_catalog/Category';

describe('Category component', () => {
  const title = 'Test Title';
  const image = 'https://example.com/test.jpg';
  const codeNumber = 123;
  const { getByText, getByAltText } = render(
    <Router>
      <Category title={title} image={image} codeNumber={codeNumber} />
    </Router>,
  );

  it('renders category title, image and shop now button', () => {
    expect(getByText(title)).toBeTruthy();
    expect(getByAltText('')).toBeTruthy();
    expect(getByText('Shop Now')).toBeTruthy();
  });

  // it('navigates to products page when shop now button is clicked', () => {
  //   // fireEvent.click(getByText((node) => node.textContent.includes('Shop Now')));
  //   fireEvent.click(
  //     getByRole('button', {
  //       name: 'Shop Now',
  //     })
  //   );

  //   expect(window.location.pathname).toBe(`/products/${codeNumber}`);
  // });
});
