import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema=new Schema({

    VideoFile:{
        type:String,//clouddinary  URL
        required:true
    },
    Thumbnail:{
        type:String,//clouddinary  URL
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String
    },
    views:{
        type:Number
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    Owner:{
        type:Schema.Types.ObjectId,
        required:true,

    }


},{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",VideoSchema);