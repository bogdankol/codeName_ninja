const {
  changeImages
} = require('../model')
const {
    NotFound
} = require('http-errors')

const changeImagesController = async (req, res) => {
    const { heroNickname } = req.params
    const {imageToDelete} = req.body
    const heroWithUpdatedImages = await changeImages(heroNickname, imageToDelete)
    res.status(200).json({heroWithUpdatedImages})
}

module.exports = {
  changeImagesController
}