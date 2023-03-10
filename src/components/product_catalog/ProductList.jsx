import React from 'react';
import { useParams } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import Product from './Product';
import { useGetProductsQuery } from '../../RtkQuery/slices/product_catalog/productListSlice';
import './ProductList.css';

const ProductList = () => {
  const { categoryId } = useParams();
  const { data, isLoading, isSuccess } = useGetProductsQuery(categoryId);

  let content;

  if (isLoading) content = <PulseLoader color="#f50057" size={30} />;

  /* eslint-disable comma-dangle */
  if (isSuccess) {
    const filteredData = data.filter(
      (product) => product.category_id === parseInt(categoryId, 10)
    );
    /* eslint-enable comma-dangle */

    content = (
      <div className="productList">
        <div className="productList__container">
          <div className="productList__title">
            <h1>Products</h1>
          </div>
          <ul className="productList__row">
            {filteredData.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default ProductList;
