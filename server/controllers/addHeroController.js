const {
  addHero
} = require('../model')
const path = require("path");
const fs = require("fs/promises");
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'damdamdidam-damdamdidamdam', 
    api_key: '915866415433462', 
    api_secret: 'JECNEwtr7vDP3Rp3avT6V5UNOnU' 
  });



const addHeroController = async (req, res) => {
  const {path: tempUpload, originalname} = req.file;

  try {
        let imageUrl = null;
        await cloudinary.v2.uploader.upload(tempUpload,
        { public_id: originalname, crop: "scale", width: 200 }, 
        function(error, result) {
            imageUrl = result
            }
          );

        const newHero = {...req.body, images: [{imageUrl: imageUrl.url}]};
        const newHeroInfo = await addHero(newHero)
        await fs.unlink(tempUpload);
        res.status(201).json({newHeroInfo})
    } catch (error) {
        await fs.unlink(tempUpload);
        res.status(404).json({message: error.message})
    }
}

module.exports = {
  addHeroController
}