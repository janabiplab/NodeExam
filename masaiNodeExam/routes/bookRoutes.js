const express=require('express')
const router=express.Router()
const Book=require('../models/book')

router.post('/api/book',(req,res)=>{
    const {title,ISBN,summary,publicationDate,geners,copiesAvailable}=req.body
    try{
        const newBook=Book({title,ISBN,summary,publicationDate,geners,copiesAvailable})
        newBook.save()
        res.status(201).json(newBook)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})

