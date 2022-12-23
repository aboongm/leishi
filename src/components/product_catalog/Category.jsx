import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = ({ codeNumber, title, image }) => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate(`/products/${codeNumber}`);
  };

  const content = (
    <div
      role="presentation"
      className="category shadow-lg"
      onClick={handleNavigateProducts}
    >
      <h1 className="uppercase">{title}</h1>
      <img src={image} alt="" />
      <button type="button">Shop Now</button>
    </div>
  );
  return content;
};
Category.propTypes = {
  codeNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Category;
