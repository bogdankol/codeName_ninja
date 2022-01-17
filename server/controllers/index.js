const { addHeroController } = require('./addHeroController')
const { patchHeroController } = require('./patchHeroController')
const { deleteHeroController } = require('./deleteHeroController')
const { changeImagesController } = require('./changeImagesController')
const { getAllHeroesController } = require('./getAllHeroesController')

module.exports = {
  getAllHeroesController,
  addHeroController,
  patchHeroController,
  deleteHeroController,
  changeImagesController
}
