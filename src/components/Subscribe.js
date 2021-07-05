import React from 'react';

const Subscribe = () => {
    return (
        <div className="subscribe d-flex justify-content-between align-items-center">
            <div className="message">
                <img src="/images/Message.png" alt=""/>
            </div>

            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <div className="card-body">
                            <h1>Subscribe To Our Blog</h1>
                            <p>A newsletter is a tool used to communicate regularly with
                                your subscribers, delivering the information</p>

                            <div className="send1">
                                <div className="d-flex align-items-center send">
                                    <div className="message">
                                        <img src="/images/message2.png" alt=""/>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Type Your Email Address"/>

                                    <button type="button" className="btn btn-success d-flex align-items-center justify-content-center">
                                        <p className="mb-0 text-white">Send now</p>
                                        <div className="position-relative imgs">
                                            <img className="position-absolute right" src="/images/right.svg" width="29" alt=""/>
                                            <img className="square" src="/images/square.svg" width="32" alt=""/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/pink.png" alt=""/>
        </div>
    );
};

export default Subscribe;