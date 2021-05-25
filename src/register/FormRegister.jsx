import React,{useState} from 'react';
import'./FormRegister.css';
import Register from './Register';
import FormSuccessRegister from './FormSuccessRegister';

const FormRegister = () => {
    const [isSubmitted, setisSubmitted] = useState(false);
    function submitForm(){
        setisSubmitted(true);
    }
    return (
        <>
         <div className='formr-container'>
         {!isSubmitted ? (
          <Register submitForm={submitForm} />
        ) : (
          <FormSuccessRegister/>
        )}
             </div>   
        </>
    )
}

export default FormRegister
