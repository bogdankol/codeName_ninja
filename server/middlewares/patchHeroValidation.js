const Joi = require('joi')

const patchHeroValidation = (req, res, next) => {
    const schema = Joi.object({
      nickname: Joi.string().min(3),
      realName: Joi.string().min(3),
      originDescription: Joi.string(),
      superpowers: Joi.string().min(3),
      catchPhrase: Joi.string().min(3),
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