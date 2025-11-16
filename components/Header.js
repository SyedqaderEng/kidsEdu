import Link from 'next/link';
import NavMenu from './NavMenu';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">KidsEdu</span>
        </Link>
        
        <NavMenu />
        
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}
