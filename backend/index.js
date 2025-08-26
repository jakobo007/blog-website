import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DB/connectDB.js';
dotenv.config();

import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';
import commentRoute from './routes/comments.route.js';
import webhookRoute from './routes/webhook.route.js';

const  PORT  = 3500

const app = express();
app.use ('/webhooks', webhookRoute)
app.use(express.json());

app.use('/v1/users', userRoute);
app.use('/v1/posts', postRoute);
app.use('/v1/comments', commentRoute);

// Error handling middleware

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message || 'Something went wrong',
        status: error.status || 500,
    })
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port localhost:${PORT}`);
})