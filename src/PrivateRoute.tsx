import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute= ({ redirectPath = '/login' }) => {
  if (!AuthenticationService.isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;

};
export default PrivateRoute;