/* eslint-disable no-unused-vars */
import Home from './home/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
export default function Main() {
    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
