const Joi = require('joi');
const validate = require('../utils/validate');

const schema = {
    userId : Joi.objectId().required(),
    itemId : Joi.objectId().required()
}

//req.body have more fields than ids
module.exports = function orderValidator(req, res, next){
    validate(req.body, schema)
    .then(()=>next())
    .catch((err)=>next(err.details[0].message))
}