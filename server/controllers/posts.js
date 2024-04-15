import Post from '../models/Post.js'
import User from '../models/User.js'

// Create Post
export const createPost = async (req, res) => {
    try {
        const { title, text } = req.body
        const user = await User.findById(req.userId)

        const newPost = new Post({
            username: user.username,
            title,
            text,
            author: req.userId,
        })
        await newPost.save()
        await User.findByIdAndUpdate(req.userId, {
            $push: { posts: newPost },
        })
        res.json(newPost)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

// Get All Posts
export const getAll = async (req, res) => {
    try {
        const posts = await Post.find().sort('-createdAt')

        if (!posts) {
            return res.json({ message: 'Постов нет' })
        }

        res.json({ posts })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

// Get My Posts
export const getMyPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        const list = await Promise.all(
            user.posts.map((post) => {
                return Post.findById(post._id)
            }),
        )

        res.json(list)
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}
