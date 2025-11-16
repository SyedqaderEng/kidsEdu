import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import BottomTabBar from './BottomTabBar';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1 pt-16"> {/* push content below fixed header */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-grow p-4 md:ml-64 transition-all duration-300 flex">
          <div className="flex-grow">
            <Breadcrumb />
            {children}
          </div>
          <RightSidebar />
        </main>
      </div>
      <Footer />
      <BottomTabBar />
    </div>
  );
}
