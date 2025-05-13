const Registration = require("../models/register");
const { decodeStandard, decodeSubject } = require("../utils/helper");
const { validateRegister } = require("../validation/register")


const registeForms = async (req, res) => {
    try {
        const { value, error } = validateRegister(req.body);
        if (error) {
            return res.status(404).json({
                success: false,
                message: error.details[0].message
            })
        }

        if (value.institute_type === "School") {
            if (!value.board) {
                return res.status(404).json({
                    success: false,
                    message: "Board is required for the school"
                })
            }
            if (!value.class) {
                return res.status(404).json({
                    success: false,
                    message: "class is required for the school"
                })
            }
            if (!value.medium) {
                return res.status(404).json({
                    success: false,
                    message: "medium is required for the school"
                })
            }
            if (!value.standard) {
                return res.status(404).json({
                    success: false,
                    message: "standard is required for the school"
                })
            } else {
                if (!decodeStandard(value.class).includes(value.standard)) {
                    return res.status(404).json({
                        success: false,
                        message: `standard must be one of among following ${decodeStandard(value.class)} for class:${value.class}`
                    })
                }
            }

            if (!value.subject) {
                return res.status(404).json({
                    success: false,
                    message: "subject is required for the school"
                })
            } else {
                if (!decodeSubject(value.class).includes(value.subject)) {
                    return res.status(404).json({
                        success: false,
                        message: `subject must be one of among following ${decodeSubject(value.class)} for class:${value.class}`
                    })
                }
            }
        }

        else if (value.institute_type === "College") {
            if (!value.university) {
                return res.status(404).json({
                    success: false,
                    message: "university is required for the College"
                })
            }
            if (!value.degree) {
                return res.status(404).json({
                    success: false,
                    message: "degree is required for the College"
                })
            }
        }
        else if (value.institute_type === "Competitive Exam Center" && !value.exam_type) {
            return res.status(404).json({
                success: false,
                message: "exam_type is required for the College"
            })
        }

    
        const register = new Registration(value);
        await register.save();

        return res.status(200).json({
            success: true,
            message: "Registration succesfull",
            data: register
        })


    } catch (error) {
        console.log("error",error)
        return res.status(500).json({
            success: false,
            message: "Internal Server error",
        })

    }
}

module.exports = { registeForms }