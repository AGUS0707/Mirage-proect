import React from 'react';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/human.png" alt=""/>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>Testimonial </h1>
                                <h2>Thats What Our
                                    Client Says About Us</h2>
                                <p>“ Heartiest congratulations to the team for Future projects. I extend thankful wishes and
                                    wish the team best of luck for the future assignments to come. Your effort is gladly
                                    ”</p>

                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h3>Jorge Morrison</h3>
                                        <h4>North California,USA</h4>
                                    </div>
                                    <div className="strelka d-flex align-items-center">

                                        <span className="icon icon-left"/>
                                        <span className="icon icon-right"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;