const mongoose=require('mongoose')

const authorSchema=mongoose.Schema({
    name:{type:String,required:true},
    biography:{type:true},
    dateOfBirth:{type:Date},
    nationality:{type:String}
    
})

const AuthorModel=mongoose.model('Author',authorSchema)

module.exports={AuthorModel}