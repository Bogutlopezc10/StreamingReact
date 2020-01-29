import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            {/* Footer */}
                <footer className="foot py-4">
                    <div className="container">
                        <div className="row d-flex social-network mt-2 mb-3 justify-content-center">
                            <div className="col-auto">
                                <i className="fa fa-facebook"></i>
                            </div>
                            <div className="col-auto">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="col-auto">
                                <i className="fa fa-github"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center foot-text">
                                <p>&copy; 2020 Streaming</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    );
}

export default Footer;