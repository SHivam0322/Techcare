import React, { useState } from 'react';
import './Forml.css';

import FormLogin from './FormLogin';
import FormlSuccess from './FormlSuccess';

const Forml = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
       
        {/* <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div> */}
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <FormlSuccess/>
        )}
        
      </div>
      
    </>
  );
};

export default Forml;
