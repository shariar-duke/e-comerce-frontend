/* eslint-disable no-unused-vars */

import { useState } from 'react';
import Layout from '../Layout';
import { showError, showLoading } from '../../utils/messages';
import { Link } from 'react-router-dom';

const CreateCategories = () => {

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false
    });

    const { name, error, success } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const categoryForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Create Category</button>
            </form>
        )
    }

    const goBack = () => (<div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">Go to Dashboard</Link>
    </div>)

    return (
        <Layout title="Add a new category" description="Ready to add a new category?">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError(error, error)}
                    {categoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
}

export default CreateCategories;







