const {
  getAllHeroes
} = require('../model')

const getAllHeroesController = async (req, res) => {
  const heroesList = await getAllHeroes()
  res.status(200).json({heroesList})
}

module.exports = {
  getAllHeroesController
}