import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="halloween" className="min-h-screen ">
      {/* <button className='btn btn-primary' onClick={() => toast.success('Hello, World!')}>Show Toast</button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App