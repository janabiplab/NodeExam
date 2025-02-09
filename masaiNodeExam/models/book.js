const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    title:{type:String,required:true},
    ISBN:{type:String,required:true},
    summary:{type:String},
    publicationDate:{type:Date},
    copiesAvaliable:{type:Number,default:1},

})

const BookModel=mongoose.model('Book',bookSchema)
module.exports={BookModel}