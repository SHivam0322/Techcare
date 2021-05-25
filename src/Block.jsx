import React from 'react'
import {NavLink} from 'react-router-dom'
import one from './images/1.jpg'

const block = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-10 mx-auto mb-2">
          <div className='row'>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item overflow-auto active text-center"  data-bs-interval="5000">
      <h2>Why choose us ?</h2>
      <p className='text-block'>We are commited to provide the best nursing services to our consumers at a minimum price.We have a wide network of super specialized nurses across many cities in India.Let us take care of your loved ones.<br/><NavLink className='carousel-btns' to=''>Get Service</NavLink></p>
      
      </div>
      <div className="carousel-item overflow-auto text-center" data-bs-interval="5000">
       <h2>For Nurses</h2>
       <p className='text-block'>TechCare gives you an opportunity to serve the world with ur skills and experience and help us in our initiative of serving the best to the world.
       Keep growing with us and get a source of income. <br/><NavLink className='carousel-btns' to='/register'>Register your Service</NavLink></p>
      
      </div>
      <div className="carousel-item overflow-auto text-center">
        <h2>TechCare</h2>
        <p className='text-block'>A free to use initiative in order to provide best nursing services at a very considerable cost.Your search for trustworthy online nursing services ends here.Want to Know more about us.<br/><NavLink className='carousel-btns' to=''>About us</NavLink></p>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

export default block
