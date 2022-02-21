
function validate(values) {
  
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    } else {
      errors.email = '';
    }
    if (!values.asunto) {
      errors.asunto = 'Subject is required';
    } else if (values.asunto.length < 8) {
      errors.asunto = 'Subject must be 8 or more characters';
    } else {
      errors.asunto = '';
    }
    return errors;
  };

  export default validate;