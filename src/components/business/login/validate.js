const validate = values => {
  const errors = {};
  if (!values.brandName) {
    errors.brandName = 'Brand Name is Required';
  }
  if (!values.email) {
    errors.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = 'Name is Required';
  }
  if (!values.relation) {
    errors.relation = 'Relatoion is Required';
  }
  if (!values.password) {
    errors.password = 'Password is Required';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is Required';
  }
  if (
    values.password &&
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = 'Password not matched';
  }
  return errors;
};

export default validate;
