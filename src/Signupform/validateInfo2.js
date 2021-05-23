export default function validateInfo2(values) {
    let errors = {};
  
    
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
   
    if (!values.otp) {
      errors.otp = 'otp number required';
    }
  
    return errors;
  }