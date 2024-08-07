/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { isAuthenticated, userInfo } from "../utils/auth";

export const AdminPrivateRoute = ({ element: Element, ...rest }) => {
    const { role } = userInfo();
    return isAuthenticated() && role === "user" ? <Element {...rest} /> : <Navigate to="/home" />
};


