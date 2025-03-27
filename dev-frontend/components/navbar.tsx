import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-stone-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16"> {} <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              CodeArena
            </Link>
          </div>

          {}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/problems" className="text-white hover:text-gray-200">
              Problems
            </Link>
            <Link href="/contest" className="text-white hover:text-gray-200">
              Contests
            </Link>
            <Link href="/login" className="text-white hover:text-gray-200">
             Login 
            </Link>
          </div>

          {}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
