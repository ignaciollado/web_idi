import { useState, useEffect } from 'react'

const useContact = (callback, validate) => {

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);

        const emailInput = event.target.email; // accessing directly
        const asuntoInput = event.target.elements.asunto; // accessing via `form.elements`
        
        console.log(emailInput.value); // output: 'foo@bar.com'
        console.log(asuntoInput.value); // output: '18'

  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useContact;