const Joi = require('joi');
const validate = require('../utils/validate');
const schema = {
    _id : Joi.objectId()
}
module.exports = function objectId(req,res,next){
    
    validate({_id: req.params.id}, schema)
    .then(()=>next())
    .catch((err)=>next(err.details[0].message));
}