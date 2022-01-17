const {
    HeroModel
  } = require('../../db/heroModel')
  
const patchHero = async (heroNickname, {nickname, realName, originDescription, superpowers, catchPhrase, newImageUrl }) => {
  const updatedHero = await HeroModel.findOne({nickname: heroNickname})
  const obj = {};
  nickname ? obj.nickname = nickname : null
  realName ? obj.realName = realName : null
  originDescription ? obj.originDescription = originDescription : null
  superpowers ? obj.superpowers = superpowers : null
  catchPhrase ? obj.catchPhrase = catchPhrase : null
  newImageUrl ? obj.images = [...updatedHero.images, {imageUrl: newImageUrl}] : null
  
  await HeroModel.findByIdAndUpdate(updatedHero._id, obj)
}

module.exports = {
  patchHero
}