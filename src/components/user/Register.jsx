import Layout from "../Layout";

export default function Register() {
    return (
        <Layout title="Register" className="container col-md-8 offset-md-2">
            <h3>Register Here</h3>
            <hr />
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Register</button>
            </form>
        </Layout>
    );
}
