import React,{useState} from 'react';
import'./FormGetService.css';
import GetService from './GetService';
import FormSuccessGetService from './FormSuccessGetService';

const FormGetService = () => {
    const [isSubmitted, setisSubmitted] = useState(false);
    function submitForm(){
        setisSubmitted(true);
    }
    return (
        <>
         <div className='formr-container'>
         {!isSubmitted ? (
          <GetService submitForm={submitForm} />
        ) : (
          <FormSuccessGetService/>
        )}
             </div>   
        </>
    )
}

export default FormGetService
