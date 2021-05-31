import  React from 'react'
import {NavLink} from 'react-router-dom'


const Footer = () => {
    return (
        <>
        <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>TechCare</h5>
					<ul class="list-unstyled quick-links">
						<li><NavLink to="">Get Service</NavLink></li>
						<li><NavLink to="">Carrers</NavLink></li>
						<li><NavLink to="about">About us</NavLink></li>
						
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						
						<li><NavLink to="">FAQ</NavLink></li>
						<li><NavLink to="terms and conditions">Terms & Conditions</NavLink></li>
						<li><NavLink to="privacy policy">Privacy Policy</NavLink></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Support</h5>
					<ul class="list-unstyled quick-links">
						<li><NavLink to="/contact">Contact Us</NavLink></li>
						<li><NavLink to="/login">Login</NavLink></li>
						<li><a href='#services'>Services</a></li>
						
						
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><NavLink to=""><i class="fa fa-facebook"></i></NavLink></li>
						<li class="list-inline-item"><NavLink to=""><i class="fa fa-twitter"></i></NavLink></li>
						<li class="list-inline-item"><NavLink to=""><i class="fa fa-instagram"></i></NavLink></li>
						<li class="list-inline-item"><NavLink to=""><i class="fa fa-google-plus"></i></NavLink></li>
						<li class="list-inline-item"><NavLink to="" target="_blank"><i class="fa fa-envelope"></i></NavLink></li>
					</ul>
                  
				</div>
                <span className='text-center'>Copyright © 2021 , All rights reserved</span>
			</div>	
			
		</div>
	</section>
    </>
    )
}

export default Footer
