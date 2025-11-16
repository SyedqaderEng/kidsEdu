import Link from 'next/link';
import React from 'react';
import { Search, Bell, Settings, UserCircle, Menu } from 'lucide-react'; // Placeholder for icons

export default function Header({ toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger menu for mobile */}
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 md:hidden mr-4">
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link href="/" aria-label="home" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          
          </div>
          <span className="text-2xl font-bold text-gray-800 hidden md:inline">KidsEdu</span>
        </Link>
        
        {/* Search Bar (Center) */}
        <div className="flex-grow flex justify-center mx-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Quick find courses/activities..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-1 text-sm font-medium">
            Sign In
          </Link>
          <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            Sign Up
          </Link>
        </div>
        
        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
          </button>
          <Link href="/parent-dashboard" className="text-gray-500 hover:text-gray-700 hidden sm:block">
            <span className="font-medium">Parent Dashboard</span>
          </Link>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <UserCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
