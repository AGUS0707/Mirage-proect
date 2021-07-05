import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="/images/logo.png" alt=""/> <br/>
                                <a href="#">560 N Riverview D Ste 658 North Carolina DA 598745 USA</a>

                                <p>Follow us on</p>

                                <div className="net">
                                    <div className="net1">
                                        <span className="icon icon-instagram"/>
                                    </div>
                                    <div className="net1">
                                        <span className="icon icon-twitter"/>
                                    </div>
                                    <div className="net1">
                                        <span className="icon icon-youtube"/>
                                    </div>
                                    <div className="net1">
                                        <span className="icon icon-facebook"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <h1>Resouces</h1>
                                <p>Revisions</p>
                                <p>Sheets</p>
                                <p>Quiz</p>
                                <p>Drill</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <h1>About</h1>
                                <p>About us</p>
                                <p>Partners</p>
                                <p>Contact us</p>
                                <p>Careers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <h1>Helpful link</h1>
                                <p>Mirage</p>
                                <p>Solutions</p>
                                <p>Industries</p>
                                <p>Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;