import express from 'express';
import  { Allnotes, createNote, deleteNote, updateNote, getNotebyID} from '../controllers/notesController.js';
import { get } from 'mongoose';
import rateLimiter from '../middleware/rateLimiter.js';
const router = express.Router();


router.get('/', Allnotes);

router.get('/:id', getNotebyID);

router.post('/', createNote);  

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);


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

export default router;