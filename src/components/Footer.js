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
                                <a href="https://www.facebook.com/juancarlos.gonzalesmontes?ref=bookmarks" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                            <div className="col-auto">
                                <a href="https://twitter.com/juan9607" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="col-auto">
                                <a href="https://github.com/Bogutlopezc10" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>    
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