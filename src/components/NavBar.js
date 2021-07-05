import React from 'react';

const NavBar = () => {
    return (
        <div className="navigationBar position-relative">
            <div className="container d-flex align-items-center justify-content-between">
                <img src="/images/logo.png" alt=""/>

                <div className="navbar">
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Product</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <img src="/images/burger.svg" alt=""/>
                    </ul>
                </div>
            </div>
            <img className="position-absolute pink5" src="/images/pink5.svg" alt=""/>
        </div>
    );
};

export default NavBar;