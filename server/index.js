import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3002
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

mongoose.set('strictQuery', false);

async function start() {
    try {
        await mongoose.connect(
            // `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.pbuqiqy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.8zorhb0.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`,
        )

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()
