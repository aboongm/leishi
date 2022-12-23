import { useSelector } from 'react-redux';
import Product from '../product_catalog/Product';

const Search = () => {
  const searchResults = useSelector((state) => state.search.search);

  return (
    <div className="productList">
      <div className="productList__container">
        <div className="productList__title">
          <h1>Search Results</h1>
        </div>

        <div className="productList__row">
          {searchResults.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
