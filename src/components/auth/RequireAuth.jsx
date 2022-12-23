import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth);

  const content = user.user ? <Outlet /> : navigate('/login');

  return content;
};
export default RequireAuth;
