const {
  patchHero
} = require('../model')
const path = require("path");
const fs = require("fs/promises");
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'damdamdidam-damdamdidamdam', 
    api_key: '915866415433462', 
    api_secret: 'JECNEwtr7vDP3Rp3avT6V5UNOnU' 
});

const patchHeroController = async (req, res) => {
  try {
    let tempUpload;
  let originalname;
  let newImageUrl;
  if(req.file) {
    const {path, originalname: origin} = req.file;
    tempUpload = path
    originalname = origin

  await cloudinary.v2.uploader.upload(tempUpload,
    { public_id: originalname }, 
    function(error, result) {
      newImageUrl = result.url
      }
    );
  }
    const { heroNickname } = req.params
    const {nickname, realName, originDescription, superpowers, catchPhrase } = req.body
    const data = {nickname, realName, originDescription, superpowers, catchPhrase, newImageUrl }
    const updatedHero = await patchHero(heroNickname, data)

  res.status(201).json({ message: "hero info updated" })
  } catch(err) {
    console.log(err.message)
    throw new Error(err.message)
  }
}

module.exports = {
  patchHeroController
}