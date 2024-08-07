import { NavLink, useNavigate } from "react-router-dom";
import { signOut, isAuthenticated, userInfo } from "../utils/auth";

const isActiveStyle = { color: "#ff9900" };
const inactiveStyle = { color: 'grey' };

const Menu = () => {
    const navigate = useNavigate();  // Initialize useNavigate


    const handleLogout = () => {
        signOut(() => {
            navigate('/login');  // Navigate to login page after logout
        });
    };

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

                {
                    !isAuthenticated() &&

                    <>
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

                    </>
                }

                {
                    isAuthenticated && <>

                        <li className="nav-item">
                            <NavLink
                                to={`${userInfo().role}/dashboard`}
                                style={({ isActive }) => isActive ? isActiveStyle : inactiveStyle}
                                className="nav-link"
                            >
                                {`${userInfo().role === "user" ? "User" : "Admin"}`}_Dashbaord
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: 'pointer', color: "grey" }} onClick={handleLogout}>
                                Logout
                            </span>
                        </li>
                    </>
                }


            </ul>
        </nav>
    );
};

export default Menu;
