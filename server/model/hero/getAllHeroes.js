const {
    HeroModel
  } = require('../../db/heroModel')
const {
    Conflict
  } = require('http-errors')
  
const getAllHeroes = async () => {
    const data = await HeroModel.find()
    return data
}

module.exports = {
  getAllHeroes
}