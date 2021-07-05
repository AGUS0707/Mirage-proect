import React from 'react';

const Teamwork = () => {
    return (
        <div className="teamwork position-relative">
            <img className="position-absolute pink3" src="/images/pink3.svg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Our Teamwork </h1>
                        <h2>We Believe Success
                            Lies On Teamwork</h2>
                        <p>Good teamwork means a synergistic way of working with each person committed and working
                            towards a shared goal. ... It is therefore a necessity that leaders facilitate and build the
                            teamwork skills of their people if they are</p>
                        <button type="button"
                                className="btn btn-success d-flex align-items-center justify-content-center">
                            <p className="mb-0 text-white">Learn more</p>
                            <div className="position-relative imgs">
                                <img className="position-absolute right" src="/images/right.svg" width="29" alt=""/>
                                <img className="square" src="/images/square.svg" width="32" alt=""/>
                            </div>
                        </button>
                    </div>
                    <div className="col-6">
                        <img src="/images/Welcome.png" alt=""/>
                    </div>
                </div>
            </div>
            <img className="position-absolute pink2" src="/images/pink2.svg" alt=""/>
        </div>
    );
};

export default Teamwork;