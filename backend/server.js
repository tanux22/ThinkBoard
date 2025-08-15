import express from 'express';
//const express = require('express'); // Uncomment if using CommonJS
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'; // Import CORS middleware

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
})); // Enable CORS for all routes

connectDB(); // Connect to MongoDB

app.use(rateLimiter)

// app.use((req,res,next)=>{
//     console.log("this is a custom middleware!!");
//     next();
// })

app.use("/api/notes", notesRoutes);

// app.get('/api/notes',(req,res)=>{
//     res.status(200).send('Hello from the backend get!');
// })

// app.post('/api/notes',(req,res)=>{
//     res.status(201).json({message:'Hello from the backend post!'});
// })

// app.put('/api/notes/:id',(req,res)=>{
//     res.status(200).json({message:'Hello from the backend put !'});
// })

// app.delete('/api/notes/:id',(req,res)=>{
//     res.status(200).json({message:'Hello from the backend get!'});
// })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//mongodb+srv://atanushreddy:IIsITwC9am32X490@cluster0.5cfigae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0