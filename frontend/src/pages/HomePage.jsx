
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
  const [isRateLimited, setisRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
        console.log("Full request URL:", `${import.meta.env.VITE_BACKEND_URL}/api/notes`);
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/notes`);
        console.log(res.data);
        setNotes(res.data);
        setisRateLimited(false);
      } catch (error) {
        console.error("Error fetching Notes", error);

        if (error.response?.status === 429) {
          setisRateLimited(true);
          toast.error('Too many requests! Please wait a bit.');
        } else {
          toast.error('Failed to fetch notes. Please try again later.');
        }
      }
      finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [])

  const handleNoteDeleted = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
  };


  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4  mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited &&
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              notes.map(note =>
                <NoteCard key={note._id} note={note} onDelete={handleNoteDeleted} />
              )
            }
          </div>
        }
      </div>
    </div>
  )
}

export default HomePage