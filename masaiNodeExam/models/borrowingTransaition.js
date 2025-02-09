const mongoose=require('mongoose')
const borrowingSchema=mongoose.Schema({
    book:{required:true},
    member:{required:true},
    borrowDate:{type:Date},
    dueDate:{type:Date,required:true}
})


const BorrowingModel=mongoose.model("Borrow",borrowingSchema)

module.exports={BorrowingModel}