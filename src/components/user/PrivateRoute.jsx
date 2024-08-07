/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

export default function PrivateRoute({ element: Element, ...rest }) {
    return isAuthenticated() ? <Element {...rest} /> : <Navigate to="/login" />
}
