/* eslint-disable no-unused-vars */
import Layout from "../Layout";
import { useEffect } from "react";
import { useState } from "react";
import { showError, showLoading } from "../../utils/messages";
import { login } from "../../api/apiAuth";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated, userInfo } from "../../utils/auth";

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: false,
        loading: false,
        disabled: false,
        redirect: false,
    });

    const { email, password, error, loading, disabled, redirect } = values;

    const handleChange = (e) => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, error: false, loading: true, disabled: true });

        login({ email, password })
            .then((response) => {
                authenticate(response?.data?.token, () => {
                    setValues({
                        email: "",
                        password: "",
                        error: "",
                        loading: false,
                        disabled: false,
                        redirect: true,
                    });
                })
            })
            .catch((err) => {
                const errMsg = err.response ? err.response.data : "Something went wrong";
                setValues({ ...values, error: errMsg, disabled: false, loading: false });
            });
    };

    useEffect(() => {
        if (redirect) {
            const { role } = userInfo();
            navigate(`/${role}/dashboard`);
        }

        // if (isAuthenticated()) {
        //     navigate("/");
        // }
    }, [redirect]);

    return (
        <Layout title="Login" className="container col-md-8 offset-md-2">
            {showLoading(loading)}
            {showError(error, error)}
            <h3>Login Here</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3" disabled={disabled}>
                    Login
                </button>
            </form>
        </Layout>
    );
}
