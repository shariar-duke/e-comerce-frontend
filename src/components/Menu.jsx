import { NavLink, useNavigate } from "react-router-dom";
import { signOut, isAuthenticated, userInfo } from "../utils/auth";
import { useState, useEffect } from "react";

const isActiveStyle = { color: "#ff9900" };
const inactiveStyle = { color: 'grey' };

const Menu = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null); // State to manage the role

    useEffect(() => {
        // Fetch role from userInfo and set it
        const fetchRole = () => {
            const user = userInfo();
            if (user && user.role) {
                setRole(user.role);
            }
        };

        fetchRole(); // Fetch role on component mount
    }, []); // Run once on component mount

    const handleLogout = () => {
        signOut(() => {
            navigate('/login');
        });
    };

    // Check role to ensure it’s not null
    console.log("The role is", role);

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
                    isAuthenticated() && role && <>
                        <li className="nav-item">
                            <NavLink
                                to={`/${role}/dashboard`}
                                style={({ isActive }) => isActive ? isActiveStyle : inactiveStyle}
                                className="nav-link"
                            >
                                {`${role === "user" ? "User" : "Admin"}`} Dashboard
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
