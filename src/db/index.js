import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`)
       console.log(`/n MANGODB CONNECTED !!! DBHOST :  ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MANGODB CONNECTION ERROR",error);
        process.exit(1)
    }
}


export default connectDB;