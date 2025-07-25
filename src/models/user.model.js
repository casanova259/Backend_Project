import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        trim :true,
        index:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary ka use krenge
        required:true,
    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is Required']
    },
    refreshToken:{
        type:String
    }
    
},{timestamps:true})


UserSchema.pre("save", async function(next)
{
    if (!this.isModified("password")) {
        return next();
    }
    this.password=bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.isPasswordCorrect=async function(password)
{
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateAccessToken= async function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRE
    }

)}
UserSchema.methods.generateRefreshToken=function(){
      return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRE
    }
)}

export const User=mongoose.model("User",UserSchema)