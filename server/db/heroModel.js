const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: [true, 'nickname is required'],
        unique: true
    },
    realName: {
        type: String,
        required: [true, 'realName is required']
    },
    originDescription: {
        type: String,
        default: 'superheroe`s tragic story',
    },
    superpowers: {
        type: String,
        required: [true, 'superpowers is required'],
    },
    catchPhrase: {
        type: String,
        required: [true, 'catchPhrase is required'],
    },
    images: {
        type: Array,
        default: undefined
    }
})

const HeroModel = mongoose.model('heroes', heroSchema)

// heroSchema.pre('save', async function () {
//     const hero = await HeroModel.findOne({nickname: this.nickname})
//     if(this.isNew || this.isModified) {
//         this.images = [...hero.images, this.images]
//     }
    
// })

module.exports = {
    HeroModel
}