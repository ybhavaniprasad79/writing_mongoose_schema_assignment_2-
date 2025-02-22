let mongoose =require("mongoose");

const BlogPosts_Schema =new mongoose.Schema({
        Title:{
            type:String,
            minlength:5
        },
        Content:{
            required:true,
            minlength:50
        },
        Author:{
            type:String,
        },
        Tags:{
            type:[String]
        },
        Category:{
            type:String,
            default:"general"
        },
        Likes:{
            type:[String],
        },
        Created_at:{
            type:Date,
            default:Date.now
        },
        Updated_at:{
            type:Date,
        },
        Comments:{
            type:mongoose.Schema.Type.ObjectId,
            ref:"Comments",
            required:true

        }
})

const Comments_Schema=new mongoose.Schema({
    Username:{
        type:String,
    },
    Message:{
        type:String
    },
    Commented_at:{
        type:Date,
        default:Date.now
    }
    
})


const Blog_Posts=mongoose.model("Blog_Post",BlogPosts_Schema)
const Comments=mongoose.model("Comments",Comments_Schema)


module.exports= {Blog_Posts,Comments}