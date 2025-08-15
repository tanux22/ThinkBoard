import Note from "../models/Note.js";

const Allnotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).send(notes);
    }
    catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}
 
const getNotebyID = async (req,res) =>{
    const {id} = req.params || {};
    try{
        const getNote= await Note.findById(id);
        if(!getNote){
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(getNote);
    }
    catch(error){
        console.error('Error fetching note by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const createNote = async (req, res) => {
    const { title, content } = req.body || {};
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }
    try {
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message: 'Note created successfully', note: newNote });
    }
    catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const updateNote = async (req, res) => {
    const {title, content} = req.body || {};
    const {id} = req.params || {};

    try {
        const updatedNote = await Note.findByIdAndUpdate(id,{title,content}, {new: true});
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

    const deleteNote = async (req, res) => {
        const { id } = req.params || {};
        try {
            const deletedNote = await Note.findByIdAndDelete(id);
            if (!deletedNote) {
                return res.status(404).json({ message: 'Note not found' });
            }
            res.status(200).json({ message: 'Note deleted successfully' });
        } catch (error) {
            console.error('Error deleting note:', error);
            res.status(500).json({ message: 'Internal Server Error' });
    }
}

    export {
        Allnotes,
        getNotebyID,
        createNote,
        updateNote,
        deleteNote
    };
