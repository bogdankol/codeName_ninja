const Joi = require('joi')

const patchHeroValidation = (req, res, next) => {
    const schema = Joi.object({
      nickname: Joi.string().min(3).max(30),
      realName: Joi.string().min(3).max(40),
      originDescription: Joi.string(),
      superpowers: Joi.string().min(3).max(90),
      catchPhrase: Joi.string().min(3).max(70),
      images: Joi.object()
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
    patchHeroValidation
  }