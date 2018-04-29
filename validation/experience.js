const Validator = require('validator');
const isEmpty = require('./is-empty');
const validateExperienceInput = (data) => {
  //
  const errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters.';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title is required.';
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company is required.';
  }

  if (!Validator.isLength(data.company, { min: 2, max: 30 })) {
    errors.company = 'Company must be between 2 and 30 characters.';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
module.exports = validateExperienceInput;
