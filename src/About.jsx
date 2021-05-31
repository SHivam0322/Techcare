import React from 'react'
import {NavLink} from 'react-router-dom'
import makrand from './images/makrand.jpg'
import devanshu from './images/devanshu.jpeg'
import shivam from './images/shivam.jpg'

const About = () => {
    return (
     <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className='row'>
              <div className="col-md-10 mx-5  pt-lg-0 order-2 order-lg-1 d-flex flex-column">
              <h1 className=" techcare">TechCare • About</h1>
                <h2 className="my-3  aboutheading">
                Who we are  
                 
                </h2>
                <h7 className="my-2 abouttext">TechCare is launched in June 2021. The platform helps customers book reliable Nursing , Physiotherapy and Caretaker services at an affordable price. Our vision is to empower our providers to deliver the best healthcare services at doorstep in one click. Our aim is to provide best healthcare services to our customers and provide a part time source of income to our providers. </h7>
                
                <h2 className="my-3 aboutheading">
                How we do it   
                 </h2>
                <h7 className="my-2 abouttext">TechCare provides a platform that allows specialized and experienced professionals to connect with users looking for specific healthcare services. All the professionals are experienced and specialized and hold a certification from a recognized university. The service providers are all verified , reliable and are well experienced in their job.Once we get a service request our executives reach to the personals and discuss the requirements with them and the requested service is provided at doorstep at a bare minimal price for required number of days or months.   </h7>

              </div>
             {/* <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={contact} className='contact-img' alt='nurse' />
              </div>*/}
            </div>
            
           
      <h2 className="my-3 mx-5 aboutheading">Our Leadership team</h2>
      <div class="card-group col-md-10 mx-5 text-center">
  <div class="card bg-light mx-2">
    <img src={makrand} class="about-img" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Makrand Bhonde &nbsp;<a href='https://www.linkedin.com/in/makrand-bhonde-87984b184'><i class='fa fa-linkedin'></i></a></h5>
      <p class="card-text">Makrand leads technology and product developement at TechCare.</p>
     
    </div>
  </div>
  <div class="card bg-light mx-2 border">
    <img src={devanshu} class="about-img" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Devanshu Jagtap&nbsp;<a href=''><i class='fa fa-linkedin'></i></a></h5>
      <p class="card-text">Devanshu is responsible for marketing and product growth at TechCare.</p>
     
    </div>
  </div>
  <div class="card bg-light mx-2 border">
    <img src={shivam} class="about-img" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Shivam Solanki&nbsp;<a href='https://www.linkedin.com/in/shivam-solanki-0520b0203'><i class='fa fa-linkedin'></i></a></h5>
      <p class="card-text">Shivam works as staff manager and resource handler at TechCare.</p>
     
    </div>
  </div>
</div>
<div id="carouselExampleInterval" className="carousel slide my-0 text-center" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item overflow-auto active text-center"  data-bs-interval="5000">
   
      <p className='mt-5 text-block'> You could be a part of our journey. Interested ?<br/><NavLink className='carousel-btns' to='register'>Register</NavLink></p>
      
      </div>
          </div>
          </div>
        </div>
   </div>
   </div>
      </section>
     </>
    )
}

export default About
