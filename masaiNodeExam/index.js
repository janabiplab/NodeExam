const express=require('express')
const app=express()
const {connectDB}=require('./dbconnect/db')
app.use(express.json())

app.listen(3000,()=>{
    
    console.log("serveris running in http://localhost:3000")
})