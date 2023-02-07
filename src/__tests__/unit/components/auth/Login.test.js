import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('Login component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two input fields and a submit button', () => {
    expect(wrapper.find('input[type="email"]').length).toEqual(1);
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
    expect(wrapper.find('button[type="button"]').length).toEqual(1);
  });

  it('should update the email state when email input changes', () => {
    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate('change', { target: { value: 'test@email.com' } });
    expect(wrapper.state().email).toEqual('test@email.com');
  });

  it('should update the password state when password input changes', () => {
    const passwordInput = wrapper.find('input[type="password"]');
    passwordInput.simulate('change', { target: { value: 'secret' } });
    expect(wrapper.state().password).toEqual('secret');
  });
});
