import { NavLink, useLocation } from "react-router-dom";

const isActiveStyle = { color: "#ff9900" };
const inactiveStyle = { color: 'grey' };

const Menu = () => {
    const location = useLocation();
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink
                        to="/home"
                        style={({ isActive }) => isActive ? isActiveStyle : inactiveStyle}
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/login"
                        style={({ isActive }) => isActive ? isActiveStyle : inactiveStyle}
                        className="nav-link"
                    >
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/register"
                        style={({ isActive }) => isActive ? isActiveStyle : inactiveStyle}
                        className="nav-link"
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
