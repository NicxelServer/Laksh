import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            {/* Header */}
            <header className="bg-dark text-white text-center py-4">
                <h1>Header</h1>
            </header>

            {/* Left Menu Bar */}
            <div className="bg-light border-right" style={{ height: '100vh' }}>
                <div className="p-4">
                    <h2>Left Menu Bar</h2>
                    <ul className="list-unstyled">
                        <li><a href="#addProduct" className="text-dark">Add Product</a></li>
                        <li><a href="#removeProduct" className="text-dark">Remove Product</a></li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <main className="container py-3">
                <h1>Home Page</h1>

                {/* Dashboard */}
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="font-15">Users</h5>
                                <h2 className="mb-3 font-18">10</h2>
                                <div className="banner-img">
                                    <img src="/assets/img/banner/1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="font-15">Departments</h5>
                                <h2 className="mb-3 font-18">5</h2>
                                <div className="banner-img">
                                    <img src="/assets/img/banner/2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="font-15">Designations</h5>
                                <h2 className="mb-3 font-18">8</h2>
                                <div className="banner-img">
                                    <img src="/assets/img/banner/3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="font-15">Roles</h5>
                                <h2 className="mb-3 font-18">12</h2>
                                <div className="banner-img">
                                    <img src="/assets/img/banner/4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <h3>Footer</h3>
            </footer>
        </div>
    );
}

export default Home;
