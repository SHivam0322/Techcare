import React from 'react'
import baby from './images/baby.png'
import injection from './images/injection.png'
import saline from './images/saline.png'
import wheelchair from './images/wheelchair.png'
import bed from './images/bed.png'
import bandade from './images/bandade.png'
import {NavLink} from 'react-router-dom'




const Block2 = () => {
    return (
       <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className='row'>
                    
                <div className="card-group" >
  
  <div className="card border-0">
    <img src={wheelchair} className="card-img-top pt-3" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Wheelchair</h5>
      <p className="card-text">Patient on wheelchair we r aware of our duties.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
  <div className="card border-0 mx-2">
    <img src={bed} className='card-img-top pt-3' alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Paralysed</h5>
      <p className="card-text">Patient is paralyzed we know the course of actions.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
  <div className="card border-0 mx-1">
    <img src={baby} className="card-img-top pt-3" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Baby/Pregnant lady</h5>
      <p className="card-text">We will shower our love on them.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
  <div className="card border-0 mx-1">
    <img src={injection} className="card-img-top pt-3" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Minor jobs</h5>
      <p className="card-text">We also have staff for minor tasks like injecting a vaccine.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
  <div className="card border-0 mx-1">
    <img src={bandade} className="card-img-top pt-3" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Dressing</h5>
      <p className="card-text">We have a specialized staff for Dressing wounds & fractures.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
  <div className="card border-0 mx-1">
    <img src={saline} className="card-img-top pt-3" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Full-Time jobs</h5>
      <p className="card-text">An 8 hr full-time attendant during day or night.</p>
      <p ><NavLink className="getservicetext" to=''>Get Service</NavLink></p>
    </div>
  </div>
</div>
                    </div>
                    </div>
                    </div>
                </div>
       </>
    )
}

export default Block2
