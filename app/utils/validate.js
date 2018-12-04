const Joi = require('joi');

function validate(data, schema) {
  return Joi.validate(data, schema);
}

module.exports = validate;