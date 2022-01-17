const {
    HeroModel
  } = require('../../db/heroModel')
  
const changeImages = async (heroNickname, {imageUrl}) => {
  const hero = await HeroModel.findOne({nickname: heroNickname})
  const arr = hero.images.filter(el => el.imageUrl !== imageUrl)
  await HeroModel.findByIdAndUpdate(hero._id, {images: arr})
  return hero
}

module.exports = {
  changeImages
}