import { useState } from "react";


/**
 * useForm
 * @param {object} initialValues - The initial form values
 * @param {function} validate - The validation function
 * @returns {{ values: object, errors: object, handleChange: function, handleSubmit: function }}
 */
const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validate) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length === 0) {
        // No errors, submit the form
        console.log("Submitting form:", values);
      } else {
        setErrors(validationErrors);
      }
    }
  };

  return { values, errors, handleChange, handleSubmit };
};

export default useForm;
