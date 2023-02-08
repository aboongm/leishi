import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Footer from '../../../components/layout/Footer';

describe('Footer', () => {
  it('renders the footer with links', () => {
    const { getByText } = render(
      <Router>
        <Footer />
      </Router>,
    );

    expect(getByText('Get to Know Us')).toBeTruthy();
    expect(getByText('About Lei Shi')).toBeTruthy();
    expect(getByText('Careers')).toBeTruthy();
    expect(getByText('Blog')).toBeTruthy();
    expect(getByText('Sustainability')).toBeTruthy();
    expect(getByText('Investor Relations')).toBeTruthy();
    expect(getByText('Cancellation and Return Policy')).toBeTruthy();
    expect(getByText('Privacy Policy')).toBeTruthy();

    expect(getByText('Make Money with Us')).toBeTruthy();
    expect(getByText('Sell products on Lei Shi')).toBeTruthy();
    expect(getByText('Sell apps on Lei Shi')).toBeTruthy();
    expect(getByText('Become an Affiliate')).toBeTruthy();
    expect(getByText('Advertise Your Products')).toBeTruthy();
    expect(getByText('Self-Publish with Us')).toBeTruthy();
    expect(getByText('Host an Lei Shi Hub')).toBeTruthy();
    expect(getByText('See More Make Money with Us')).toBeTruthy();

    expect(getByText('Contact Us')).toBeTruthy();
    // expect(getByText('WhatsApp us : +91 89740 003780')).toBeTruthy();
    // expect(getByText('Call Us : +91 89740 003780')).toBeTruthy();
    // expect(getByText('Should you encounter any bugs')).toBeTruthy();
    // expect(getByText('Download Our App')).toBeTruthy();

    expect(getByText('© 2022 All rights reserved. Lei Shi LLP')).toBeTruthy();
  });
});
