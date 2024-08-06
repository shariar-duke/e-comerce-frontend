import Layout from "../Layout";
import { useState } from "react";
import { showError, showLoading } from "../../utils/messages.jsx"
export default function Register() {
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

    // handleChnage function er jnno
    const handleChange = (e) => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("The Data I should got is", values)
    }
    return (
        <Layout title="Register" className="container col-md-8 offset-md-2">
            <h3>Register Here</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={handleChange} className="form-control" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </Layout>
    );
}
