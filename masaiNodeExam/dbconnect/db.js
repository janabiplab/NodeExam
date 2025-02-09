const mongoose=require('mongoose')

const connectDb=async ()=>{
    try{
        mongoose.connect('mongodb://localhost:27017',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('conected with database')
    }
    catch(err){
        console.log(err)
    }
}

module.exports={connectDb}