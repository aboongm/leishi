import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Category = ({ codeNumber, title, image }) => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate(`/products/${codeNumber}`);
  };

  const content = (
    <li className="category shadow-lg" onClick={handleNavigateProducts}>
      <h1 className="uppercase">{title}</h1>
      <img src={image} alt="" />
      <button type="button">Shop Now</button>
    </li>
  );
  return content;
};

export default Category;
