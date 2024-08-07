/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { isAuthenticated, userInfo } from "../../utils/auth";

export default function AdminPrivateRoute({ element: Element, ...rest }) {
    const { role } = userInfo()
    return isAuthenticated() && role === "admin" ? <Element {...rest} /> : <Navigate to="/login" />
}
