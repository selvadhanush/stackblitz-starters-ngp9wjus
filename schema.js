const mongoose=require("mongoose")

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    message: { type: String, required: true },
    commentedAt: { type: Date, default: Date.now }
});

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true, minlength: 5 },
    content: { type: String, required: true, minlength: 50 },
    author: { type: String, required: true },
    tags: { type: [String] },
    category: { type: String, default: "General" },
    likes: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date ,
        default:new Date()
    },
    comments: [commentSchema]
});



const BlockPost = mongoose.model('BlogPost',blogPostSchema);

module.exports=BlockPost;