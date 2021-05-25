import React from 'react'
import { NavLink } from 'react-router-dom'
import one from '../images/7.jpg'

const FormSuccessRegister = () => {
    return (
        <>
           <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto">
                <div className='row'>
              <div className="col-md-7 mx-5 my-1 pt-lg-0 order-1 order-lg-1 d-flex flex-column  justify-content-center">
              <div className='registersuccesstext'>
              <h1 className="techcare">TechCare •</h1>
                <h1>
                Profile sent for verification once verified a confirmation mail will sent on your provided email-id.
                 
                </h1>
                {/*<h4 className="my-2">Feel free to reach us.</h4>*/}
                <div className="mt-3">
                  <a href='callto:8830431486'>
                    <button className="getservice-btn">HOME</button>
                  </a>
                  <br/>
                 
                </div>
                </div>
              </div>
              <div className='col-lg-3 order-2 order-lg-2 header-img'>
                  <img src={one} className='registersuccess-img' alt='nurse' />
              </div>
            </div>
            {/*<div id="carouselExampleInterval" className="carousel slide my-0 text-center" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item overflow-auto active text-center"  data-bs-interval="5000">
      <h2 className='text-center'>TechCare</h2>
   
      <p className='text-block'>Our customer care service is commited to resolve your queries 24*7.<br/><NavLink className='carousel-btns' to=''>About Us</NavLink></p>
      
      </div>
          </div>
    </div>*/}
        </div>
   </div>
   </div>
      </section>
        </>
    )
}

export default FormSuccessRegister
