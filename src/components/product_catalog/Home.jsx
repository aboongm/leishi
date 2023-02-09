import React from 'react';
import { Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import banner from '../../assets/images/banner_2.jpg';
import './Home.css';
import Category from './Category';
import { useGetCategoriesQuery } from '../../RtkQuery/slices/product_catalog/categorySlice';

const Home = () => {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();

  let content;
  /* eslint-disable operator-linebreak */

  isLoading &&
    /* eslint-enable operator-linebreak */
    /* eslint-disable   no-unused-expressions */
    (content = (
      /* eslint-enable  no-unused-expressions */
      <div
        data-testid="loading-indicator"
        className="flex items-center justify-center h-96 w-full bg-gray-300"
      >
        <PulseLoader color="#f50057" size={30} />
      </div>
    ));

  if (isSuccess) {
    content = (
      <div className="home">
        <Link to="/">
          <img className="home__image" src={banner} alt="banner" />
        </Link>
        <ul className="home__row">
          {data.map((category) => (
            <li key={category.id} className="category shadow-lg">
              <Category
                codeNumber={category.code_number}
                title={category.title}
                image={category.image}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return content;
};

export default Home;
