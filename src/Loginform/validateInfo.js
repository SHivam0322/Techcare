export default function validateInfo(values) {
    let errors = {};
  
    
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
   
    if (!values.email) {
      errors.email = 'email number required';
    }
  
    if (!values.password) {
      errors.password = 'password number required';
    }
    return errors;
  }