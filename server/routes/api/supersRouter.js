const express = require('express')
const {
  addHeroValidation,
  patchHeroValidation
} = require('../../middlewares')
const supersRouter = express.Router()
const {
  getAllHeroesController,
  addHeroController,
  patchHeroController,
  deleteHeroController,
  changeImagesController
} = require('../../controllers')
const {
    errorHandler
} = require('../../helpers')
const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../../temp");

const uploadConfig = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname)
    },
    limits: {
        fileSize: 2048
    }
});

const uploadMiddleware = multer({
    storage: uploadConfig
});


supersRouter.get('/', errorHandler(getAllHeroesController))
supersRouter.post('/', uploadMiddleware.single("images"), addHeroValidation, addHeroController)
supersRouter.patch('/:heroNickname', uploadMiddleware.single("images"), patchHeroValidation, errorHandler(patchHeroController))
supersRouter.delete('/:heroNickname', errorHandler(deleteHeroController))
supersRouter.patch('/:heroNickname/deleteImage', errorHandler(changeImagesController))

module.exports = supersRouter
