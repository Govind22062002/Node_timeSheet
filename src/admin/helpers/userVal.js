const Joi = require("joi");
const flash = require('connect-flash');

exports.userVal = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(40).required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        role: Joi.string().required(),
        
    }).unknown(true)

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        res.locals.message = req.flash();
        const { details } = error
        req.flash('error', details[0].message);
        res.redirect('back');
    } else {
        next();
    }
}