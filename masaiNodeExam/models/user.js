const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    Username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'Member'},
    name:{type:String,required:true},
    email:{type:String,required:true},
    
})

const UserModel=mongoose.model("User",userSchema)
module.exports={UserModel}