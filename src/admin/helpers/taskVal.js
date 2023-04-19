const Joi = require("joi");

exports.taskVal = (req, res, next) => {
    const schema = Joi.object().keys({
        employee_Id: Joi.string().required(),
        task: Joi.string().required(),
        status: Joi.string().required(),
        Work_Hour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
        start_Date: Joi.string().required(),
        end_Date: Joi.string().required(),
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