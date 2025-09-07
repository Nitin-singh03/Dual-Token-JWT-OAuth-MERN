import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import rateLimit from 'express-rate-limit'
import connectDB from './config/mongodb.js'
import AuthRouter from './routes/AuthRoutes.js'
import UserRouter from './routes/UserRoutes.js'

const app = express()
const PORT = process.env.PORT || 4000
connectDB()

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes' }
});

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT,
    credentials: true,
}))


app.get('/', (req, res) => {
    res.send(`<h1> API's is Working... </h1>`)
})

app.use('/api/', apiLimiter)

app.use('/api/auth', AuthRouter)
app.use('/api/user', UserRouter)

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})