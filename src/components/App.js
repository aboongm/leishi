import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './layout/Home';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
