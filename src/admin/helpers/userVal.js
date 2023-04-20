const Joi = require("joi");

exports.userVal = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).max(40).required(),
        role: Joi.string().required(),
        status : Joi.string().required(),
        dept: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
        dob: Joi.date().required(),
        jobType: Joi.string().valid('TRAINEE', 'INTERN', 'JOB').required(),
        joiningDate: Joi.date().required(),

    }).unknown(true)

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        res.locals.message = req.flash();
        const { details } = error;
        req.flash('error', details[0].message);
        res.redirect('back');
    } else {
        next();
    }
}