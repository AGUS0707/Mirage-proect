import React from 'react';

const Design = () => {
    return (
        <div className="design">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/pluto-artist-workspace.png" alt=""/>
                    </div>
                    <div className="col-6">
                        <h1>Design Things </h1>
                        <h2>We Loves To Design
                            Your Creative Ideas</h2>
                        <p>A creative concept is an overarching “Big Idea” that captures audience interest, influences
                            their emotional response and inspires them to take action.It is a unifying theme that can be
                            used across all campaign messages </p>
                        <button type="button"
                                className="btn btn-success d-flex align-items-center justify-content-center">
                            <p className="mb-0 text-white">Learn more</p>
                            <div className="position-relative imgs">
                                <img className="position-absolute right" src="/images/right.svg" width="29" alt=""/>
                                <img className="square" src="/images/square.svg" width="32" alt=""/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;