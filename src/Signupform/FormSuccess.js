import React from 'react';
import { NavLink } from 'react-router-dom';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='formverify-content-right'>
      <h1 className='form-success my-5'>Account created Successfully!</h1>
    <a href='home' className='acccreated'>Login</a>
    </div>
  );
};

export default FormSuccess;