const validate = values => {
  const errors = {};
  if (!values.brandName) {
    errors.brandName = 'Brand Name is Required';
  }
  if (!values.mobile_one) {
    errors.mobile_one = 'Mobile number is Required';
  }
  
  return errors;
};

export default validate;
