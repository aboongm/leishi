import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './product_catalog/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProductList from './product_catalog/ProductList';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:categoryId" element={<ProductList />} />
      </Route>
    </Routes>
  );
}

export default App;
