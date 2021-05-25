import React from 'react';
import { NavLink } from 'react-router-dom';
import './Forml.css';

const FormlSuccess = () => {
  return (
    <div className='formverifyl-content-right'>
      <h1 className='forml-success my-5'>Logged In Successfully!</h1>
    <a href='home' className='acccreatedl'>Home</a>
    </div>
  );
};

export default FormlSuccess;