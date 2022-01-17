const { addHero } = require('./hero/addHero')
const { patchHero } = require('./hero/patchHero')
const { changeImages } = require('./hero/changeImages')
const { getAllHeroes } = require('./hero/getAllHeroes')

module.exports = {
  getAllHeroes,
  addHero,
  patchHero,
  changeImages
}

