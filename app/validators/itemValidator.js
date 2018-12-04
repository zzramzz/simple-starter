const Joi = require('joi');
const validate = require('../utils/validate');

const itemSchema = {
    title: Joi.string().
        label('title').
        min(4),
    price: Joi.number(),
    inStock: Joi.number(),
    photo: Joi.string(),
    desc: Joi.string(),
    type: Joi.string()
}

module.exports = function itemValidator(req, res,next ){
validate(req.body, itemSchema)
.then(()=>next())
.catch((err)=>next(err.details[0].message))
}