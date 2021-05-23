import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Forml.css';


const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='formverify-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Log In
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <button className='form-input-btn' type='submit' onClick={handleSubmit}>
        Log In
        </button>
       
      </form>
    </div>
  );
};

export default FormLogin;