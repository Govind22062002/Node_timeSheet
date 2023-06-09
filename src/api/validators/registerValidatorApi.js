const Joi = require("joi");

const Schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.email().required,
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})