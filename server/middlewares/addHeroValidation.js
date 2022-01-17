const Joi = require('joi')

const addHeroValidation = (req, res, next) => {
    const schema = Joi.object({
      nickname: Joi.string().min(3).max(30).required(),
      realName: Joi.string().min(3).max(40).required(),
      originDescription: Joi.string().required(),
      superpowers: Joi.string().min(3).max(90).required(),
      catchPhrase: Joi.string().min(3).max(70).required(),
      images: Joi.any()
    })
  
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(400).json({
        message: validationResult.error.details
      })
    }
  
    next()
  }
  
  module.exports = {
    addHeroValidation
  }