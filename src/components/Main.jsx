/* eslint-disable no-unused-vars */
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';
import PrivateRoute from './user/PrivateRoute';
import AdminDashboard from './admin/adminDashboard';
import { AdminPrivateRoute } from '.././protectedRoutes/AdminRoute';
import Random from './Random';

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/user/dashboard' element={<PrivateRoute element={Dashboard} />} />
                <Route path='/admin/dashboard' element={<AdminPrivateRoute element={AdminDashboard} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
