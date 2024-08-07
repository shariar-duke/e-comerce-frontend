/* eslint-disable no-unused-vars */
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './user/Login';
import Register from './user/Register';
import Dashboard from './user/Dashboard';
export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
