import Layout from "../Layout";
import { userInfo } from "../../utils/auth";
export default function AdminDashboard() {

    const { name, email, role } = userInfo()

    return (
        <Layout title="Dashboard" className="container mt-4">
            <div className="row">
                {/* Left side - User Links */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header fs-4">
                            User Links
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/my-cart" className="btn btn-link fs-5"> Create Category </a>
                                </li>
                                <li>
                                    <a href="/update-profile" className="btn btn-link fs-5">Create Product </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right side - User Information and Purchase History */}
                <div className="col-md-8">
                    <div className="row">
                        {/* User Information Card */}
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header fs-4">
                                    User Information
                                </div>
                                <div className="card-body">
                                    <p className="fs-5"><strong>Name:</strong> {name}</p>
                                    <p className="fs-5"><strong>Email:</strong> {email}</p>
                                    <p className="fs-5"><strong>Role:</strong> {role} </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}
