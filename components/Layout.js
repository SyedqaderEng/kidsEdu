import Header from './Header';
import Sidebar from './Sidebar'; // I will create this component
import Footer from './Footer';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-grow p-4 md:ml-64 transition-all duration-300"> {/* Added md:ml-64 for sidebar spacing */}
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
