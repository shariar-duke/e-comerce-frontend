import { Link } from "react-router-dom";
export default function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </nav>
    )
}
