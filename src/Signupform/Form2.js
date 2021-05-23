import React, { useState } from 'react';
import './Form.css';

import FormSuccess from './FormSuccess';
import Verifyotp from './Verifyotp';

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='verify-form-container'>
       
        {/* <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div> */}
        {!isSubmitted ? (
          <Verifyotp submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
        
      </div>
      
    </>
  );
};

export default Form2;
