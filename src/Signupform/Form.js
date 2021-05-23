import React, { useState } from 'react';
import './Form.css';
import Form2 from './Form2';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Verifyotp from './Verifyotp';

const Form = () => {
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
          <FormSignup submitForm={submitForm} />
        ) : (
          <Form2/>
        )}
        
      </div>
      
    </>
  );
};

export default Form;
