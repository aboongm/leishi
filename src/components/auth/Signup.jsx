import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginSignup.css';
import { useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import leishi from '../../assets/images/leishi.png';
import { useRegisterUserMutation } from '../../RtkQuery/slices/auth/authApi';
import { setCredentials } from '../../RtkQuery/slices/auth/authSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [errMsg, setErrMsg] = useState('');

  /* eslint-disable operator-linebreak */
  const [registerUser, { data: registerData, isLoading, isSuccess }] =
    useRegisterUserMutation();
  /* eslint-enable operator-linebreak */

  const handleNameInput = (e) => setFullname(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleMobileNoInput = (e) => setMobileNo(e.target.value);

  useEffect(() => {
    setErrMsg('');
  }, [fullname, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser({
        user: {
          fullname,
          email,
          password,
          mobileNo,
        },
      }).unwrap();
      console.log(data);
      navigate('/');
    } catch (error) {
      if (!error) {
        setErrMsg('No server response' || errMsg);
      } else if (error.status === 400) {
        setErrMsg('Invalid email or password');
      } else if (error.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg(error.data?.message);
      }
    }
  };

  /* eslint-disable comma-dangle */
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setCredentials({
          user: registerData.status.data,
          token: registerData.status.accessToken,
          isLoggedIn: true,
        })
      );
    }
  }, [isSuccess, registerData, dispatch]);
  /* eslint-enable comma-dangle */

  if (isLoading) return <PulseLoader color="#f50057" size={30} />;

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
            Already have an account? &nbsp;
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

          <div className="mt-4">
            <label
              htmlFor="signup"
              className="text-sm font-medium leading-none login__next"
            >
              <input
                aria-label="enter your mobile number"
                type="number"
                id="number"
                className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none login__text py-3 w-full pl-3 mt-2"
                value={mobileNo}
                onChange={handleMobileNoInput}
                placeholder="Mobile Number"
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
