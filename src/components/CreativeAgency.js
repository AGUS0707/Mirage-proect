import React from 'react';

const CreativeAgency = () => {
    return (
        <div className="creativeAgency position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                       <div className="d-flex ">
                           <img src="/images/line.svg" alt=""/>
                           <h1>Creative Agency</h1>
                       </div>
                        <h2>We Deliver The Best
                            Product for You</h2>
                        <p>Design is the creation of a plan or convention for the construction of an object or a system
                            as in architectural blueprints, engineering drawings, business processes,</p>
                        <button type="button" className="btn btn-success d-flex align-items-center justify-content-center">
                            <p className="mb-0 text-white">Get started</p>
                            <div className="position-relative imgs">
                                <img className="position-absolute right" src="/images/right.svg" width="29" alt=""/>
                                <img className="square" src="/images/square.svg" width="32" alt=""/>
                            </div>
                        </button>
                    </div>
                    <div className="col-6">
                        <img src="/images/Hero.png" alt=""/>
                    </div>
                </div>
            </div>
            <img className='position-absolute pink4' src="/images/pink4.svg" alt=""/>
        </div>
    );
};

export default CreativeAgency;