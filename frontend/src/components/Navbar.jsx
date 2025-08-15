import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-base-300 ">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold font-mono tracking-widest 
                         text-orange-400 drop-shadow-[0_0_8px_rgba(255,165,0,0.7)]
                         hover:text-orange-300 transition-colors duration-300">
             ThinkBoard
          </h1>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/create"
              className="btn border-2 border-orange-500 bg-orange-500 text-black font-bold
                         shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:shadow-orange-500/50
                         transition-all duration-300"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
