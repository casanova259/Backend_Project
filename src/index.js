// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config(
    {
        path:'./env'
    }
)

connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log(error);
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is Running at port ::${process.env.PORT}`)
    })
})
.catch((err)=>
{
    console.log("MANGO DB Connection failed")
})
















/*import express from "express";
const app=express()

;(async ()=>{

    try {
        await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR : ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR:",error)
        throw error
    }
})*/