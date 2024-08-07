/* eslint-disable no-unused-vars */
import Layout from "../Layout";
import { useState } from "react";
import { showError, showLoading } from "../../utils/messages.jsx"
import { register } from "../../api/apiAuth.js"; // register function take call kore anlam
import { Link } from "react-router-dom"

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
        // jokhn form ta submit krte jabo tokhn values gula nibo , error option ta false kore dibo . loading ta k true kore dibo ...submit button ta jno tokhn disable hoy 
        // submit button k disabled kore dibo 
        setValues({ ...values, error: false, loading: true, disabled: true })

        // er por ei values gula dia register function take call kore dibe 

        // register function take ekta object dia call korte hoy ei object er modhe sob property dia amra call korbo na just name, email and password dia call korbo


        register({ name, email, password }).then(response => setValues({
            name: "",
            email: "",
            password: "",
            success: true,
            disabled: false,
            loading: false
        })).catch(err => {

            const errMsg = err.response ? err.response.data : "Something went wrong";
            setValues({ ...values, error: errMsg, disabled: false, loading: false });


        })



    }

    // for displaying success 
    const showSuccess = () => {


        if (success) return (
            <div className="alert alert-primary">
                New Account Create please Login . <Link to="/login">Login</Link>
            </div>
        )
    }
    return (
        <Layout title="Register" className="container col-md-8 offset-md-2">

            {showLoading(loading)}
            {showError(error, error)}
            {showSuccess()}
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
