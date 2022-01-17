const {
    HeroModel
  } = require('../../db/heroModel')
const {
    Conflict
  } = require('http-errors')
  
const addHero = async ({nickname, realName, originDescription, superpowers, catchPhrase, images}) => {
  const newHero = new HeroModel({
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    images
  })
  const existenceCheck = await HeroModel.findOne({
    nickname
  })

  if (!existenceCheck) {
    const hero = await newHero.save()
    return hero
  }
  throw new Conflict('hero already exists')
}

module.exports = {
  addHero
}