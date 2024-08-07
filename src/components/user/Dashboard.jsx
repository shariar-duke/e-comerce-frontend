import Layout from "../Layout";

export default function Dashboard() {
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
                                    <a href="/my-cart" className="btn btn-link fs-5">My Cart</a>
                                </li>
                                <li>
                                    <a href="/update-profile" className="btn btn-link fs-5">Update Profile</a>
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
                                    <p className="fs-5"><strong>Name:</strong> John Doe</p>
                                    <p className="fs-5"><strong>Email:</strong> john.doe@example.com</p>
                                    <p className="fs-5"><strong>Role:</strong> User</p>
                                </div>
                            </div>
                        </div>
                        {/* Purchase History Card */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header fs-4">
                                    Purchase History
                                </div>
                                <div className="card-body">
                                    <p className="fs-8">History</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
