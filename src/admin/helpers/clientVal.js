const Joi = require("joi");

exports.clientVal = (req, res, next) => {
    const schema = Joi.object().keys({
        clientName: Joi.string().min(3).max(40).required(),
        projectName: Joi.string().min(3).max(40).required(),
        status : Joi.string().required(),
        discription: Joi.string().required(),
        start_Date: Joi.date().required(),
        end_Date: Joi.date().required()
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