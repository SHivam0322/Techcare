import React from 'react';
import { NavLink } from 'react-router-dom';
import './Forml.css';

const FormlSuccess = () => {
  return (
    <div className='formverify-content-right'>
      <h1 className='form-success my-5'>Loggedin Successfully!</h1>
    <a href='home' className='acccreated'>Home</a>
    </div>
  );
};

export default FormlSuccess;