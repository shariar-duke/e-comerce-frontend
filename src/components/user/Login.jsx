/* eslint-disable no-unused-vars */
import Layout from "../Layout";
import { useState } from "react";
export default function Login() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: false,
        loading: false,
        disabled: false,
        success: false,
    })
    const { name, email, password, success, error, loading, disabled } = values;
    return (
        <Layout title="Login" className="container col-md-8 offset-md-2">
            <h3>Login Here</h3>
            <hr />
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </Layout>
    );
}
