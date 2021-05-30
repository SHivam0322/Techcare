import React from "react";
import { NavLink } from "react-router-dom";
import SimpleSlider from './Block'
import Block2 from './Block2'
import Footer from './Footer'

import nurse from './images/nurse.jpg'

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className='row'>
              <div className="col-md-6 my-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  justify-content-center">
                <h1>
                  {" "}
                  Get Part-Time,Full-Time specialized nurses , Caretakers and Physiotherapists at a minimum price with,{" "}
                  <h1 className="techcare">TechCare •</h1>
                </h1>
                <h3 className="my-2">We are know to Take-Care !!</h3>
                <div className="mt-3">
                  <NavLink to="getservice">
                    <button className="getservice-btn">Get Service</button>
                  </NavLink>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={nurse} className='img-fluid-animated' alt='nurse' />
              </div>
            </div>
          </div>
          </div>
        </div>
   
      </section>
      <SimpleSlider/>
    <Block2/>
    <Footer/>
    </>
  );
};

export default Home;
