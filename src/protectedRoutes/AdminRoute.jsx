/* eslint-disable react/prop-types */
// AdminRoute.jsx
import { Navigate } from 'react-router-dom';
import { isAuthenticated, userInfo } from '../utils/auth';

export const AdminPrivateRoute = ({ element: Component }) => {
    const { role } = userInfo();
    console.log("The role is", role)
    return isAuthenticated() && role === 'admin' ? <Component /> : <Navigate to="/home" />;
};
