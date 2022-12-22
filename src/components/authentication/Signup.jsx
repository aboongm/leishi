import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginSignup.css';
import leishi from '../../assets/images/leishi.png';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameInput = (e) => setFullname(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      user: {
        fullname,
        email,
        password,
      },
    });
  };

  const content = (
    <section className="signup__container">
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <img src={leishi} alt="leishi" className="header__logo" />
        </Link>
        <div className="bg-white border shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-12">
          <p className="text-2xl font-extrabold leading-6 login__text">
            Create your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none login__text">
            Already have an account?
            <span className="text-sm font-medium leading-none underline login__text cursor-pointer">
              <Link to="/login">Login Here</Link>
            </span>
          </p>
          <div className="mt-4">
            <label
              htmlFor="signup"
              className="text-sm font-medium leading-none login__next"
            >
              <input
                aria-label="enter your fullname"
                type="text"
                id="fullname"
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                value={fullname}
                onChange={handleNameInput}
                placeholder="Full Name"
                required
              />
            </label>
          </div>

          <div className="mt-4">
            <label
              htmlFor="signup"
              className="text-sm font-medium leading-none login__next"
            >
              <input
                aria-label="enter your email address"
                type="email"
                id="email"
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                value={email}
                onChange={handleEmailInput}
                placeholder="Email Address"
                required
              />
            </label>
          </div>

          <div className="mt-4">
            <label
              htmlFor="signup"
              className="text-sm font-medium leading-none login__next"
            >
              <input
                aria-label="enter your password"
                type="password"
                id="password"
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Password"
                required
              />
            </label>
          </div>

          <div className="mt-8">
            <button
              onClick={handleSubmit}
              type="button"
              aria-label="create my account"
              className="signup__button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return content;
};

export default Signup;
