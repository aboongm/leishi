import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './product_catalog/Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProductList from './product_catalog/ProductList';
import Basket from './cart/Basket';
import RequireAuth from './auth/RequireAuth';
import Payment from './payment/Payment';
import Order from './order/Order';
import Search from './sorting/Search';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products/:categoryId" element={<ProductList />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search" element={<Search />} />

        <Route element={<RequireAuth />}>
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
