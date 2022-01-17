const {
    HeroModel
  } = require('../db/heroModel')
const {
    NotFound
  } = require('http-errors')

const deleteHeroController = async (req, res) => {
    const { heroNickname } = req.params
    const heroToDelete = await HeroModel.findOne({nickname: heroNickname})
    if(!heroToDelete) throw new NotFound('no hero found')
    await heroToDelete.delete()
  res.status(200).json({ message: "deleted" })
}

module.exports = {
  deleteHeroController
}