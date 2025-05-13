const Joi = require('joi');

const validateRegister = (data) => {
    const schema = Joi.object({
        institute_type: Joi.string().valid('Playhouse','School','College','Competitive Exam Center')
            .required(),

        board: Joi.string().optional().valid('GSAB', 'CBSE').default(null),
        medium: Joi.string().optional().valid('English', 'Hindi').default(null),
        class: Joi.string().optional().valid('Pre-primary', 'Primary', 'Secondary', 'Higher Secondary').default(null),
        standard: Joi.string().optional().default(null),
        subject: Joi.string().optional().default(null),
        university: Joi.string().optional().default(null),
        degree: Joi.string().optional().default(null),
        exam_type: Joi.string().optional().default(null),
    }, { abortEarly: false })

    return schema.validate(data, { abortEarly: false });
}

module.exports = { validateRegister };


