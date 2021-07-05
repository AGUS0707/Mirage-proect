import React from 'react';

const Services = () => {
    return (
        <div className="services">
            <p>Our Services</p>
            <h1>Why People Choose Us</h1>

           <div className="container">
               <div className="row">
                   <div className="col-3">
                       <div className="card">
                           <div className="card-body">
                               <span className="icon icon-design"></span>
                               <h2>Design</h2>
                               <h3>a plan or drawing produced to show the look and function</h3>

                               <div className="learn">
                                   <div className="d-flex align-items-center justify-content-center">
                                       <h4>Learn more</h4>
                                       <img src="/images/right2.svg" alt=""/>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                       <div className="card">
                           <div className="card-body">
                               <span className="icon icon-development"></span>
                               <h2>Development</h2>
                               <h3>Development is defined as the process of growth or new </h3>

                               <div className="learn">
                                   <div className="d-flex align-items-center justify-content-center">
                                       <h4>Learn more</h4>
                                       <img src="/images/right2.svg" alt=""/>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                       <div className="card">
                           <div className="card-body">
                               <span className="icon icon-branding"></span>
                               <h2>Branding</h2>
                               <h3>The marketing practice of creating a name, symbol or </h3>

                               <div className="learn">
                                   <div className="d-flex align-items-center justify-content-center">
                                       <h4>Learn more</h4>
                                       <img src="/images/right2.svg" alt=""/>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                       <div className="card">
                           <div className="card-body">
                               <span className="icon icon-illustration"></span>
                               <h2>Illustration</h2>
                               <h3>An illustration is a decoration, interpretation or visual</h3>

                               <div className="learn">
                                   <div className="d-flex align-items-center justify-content-center">
                                       <h4>Learn more</h4>
                                       <img src="/images/right2.svg" alt=""/>
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

export default Services;