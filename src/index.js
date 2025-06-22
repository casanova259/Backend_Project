// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";
import dotenv from "dotenv"


dotenv.config(
    {
        path:'./env'
    }
)

connectDB()
















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