import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import Dashboard from '../pages/dashboard';

const Root = () => {
    const stateAuth = useContext(AuthContext);
  const { isLoggedIn } = stateAuth;

  return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;
}

export default Root