import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import axios from 'axios';
import toast from 'react-hot-toast';

const NoteCard = ({ note,onDelete }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/notes/${id}`);
            toast.success('Note deleted successfully!');
            onDelete(id); 
        }
        catch (error) {
            console.error("Error deleting note", error);
            if (error.response?.status === 429) {
                toast.error("Slow down! You're deleting notes too fast", {
                    duration: 4000,
                    icon: "💀",
                });
            } else {
                toast.error("Failed to delete note");
            }
        }
    }


    const handleUpdate = async (e, id) => {
        e.preventDefault();
        // Logic for updating the note
        
    };
    return (
        <Link
            to={`/notes/${note._id}`}
            className="bg-base-300 border-2 border-orange-500 shadow-lg shadow-orange-500/20 
                 rounded-xl p-5 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300
                 group"
        >
            <h2 className="text-2xl font-bold text-orange-400 mb-3 group-hover:text-orange-300 transition-colors duration-300">
                {note.title}
            </h2>
            <p className="text-base-content/80 mb-4">
                {note.content.length > 100
                    ? `${note.content.substring(0, 100)}...`
                    : note.content}
            </p>
            <div className="text-sm text-orange-300 space-y-1">
                <p>Created: {new Date(note.createdAt).toLocaleDateString()}</p>
                <p> Updated: {new Date(note.updatedAt).toLocaleDateString()}</p>
            </div>
            <div className='flex items-center gap-1 mt-4 ml-70    '>
                <PenSquareIcon className='size-4' onClick={(e) => { handleUpdate(e, note._id) }} />
                <button className='btn btn-ghost btn-xs text-error' onClick={(e) => { handleDelete(e, note._id) }}>
                    <Trash2Icon className='size-4' />
                </button>
            </div>
        </Link>
    )
}

export default NoteCard;
