import React from 'react';
import validate from './validateInfo2';
import useForm2 from './useForm2';
import './Form.css';


const Verifyotp = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='formverify-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Verify your contact details
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Enter OTP</label>
          <input
            className='form-input'
            type='text'
            name='otp'
            placeholder='Enter otp'
            value={values.otp}
            onChange={handleChange}
          />
          {errors.otp && <p>{errors.otp}</p>}
        </div>
        
        <button className='form-input-btn' type='submit' onClick={handleSubmit}>
         Verify
        </button>
        <span className='form-input-login'>
          <a href='#'>Resend OTP</a>
        </span>
      </form>
    </div>
  );
};

export default Verifyotp;