import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        username: { type: String },
        title: { type: String, required: true },
        text: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true },
)
export default mongoose.model('Post', PostSchema)
