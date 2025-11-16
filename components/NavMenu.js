import Link from 'next/link';
import { useState } from 'react';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Courses',
      href: '/courses',
      submenu: [
        { title: 'Math', href: '/courses/math' },
        { title: 'Science', href: '/courses/science' },
        { title: 'Reading', href: '/courses/reading' },
        { title: 'Art', href: '/courses/art' }
      ]
    },
    {
      title: 'Ages',
      href: '/ages',
      submenu: [
        { title: '3-5 Years', href: '/ages/3-5' },
        { title: '6-8 Years', href: '/ages/6-8' },
        { title: '9-12 Years', href: '/ages/9-12' }
      ]
    },
    {
      title: 'Features',
      href: '/features'
    },
    {
      title: 'Parents',
      href: '/parents'
    },
    {
      title: 'Teachers',
      href: '/teachers'
    }
  ];

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item) => (
        <div key={item.title} className="relative group">
          <Link href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
            {item.title}
            {item.submenu && (
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>
          
          {item.submenu && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {item.submenu.map((subItem) => (
                  <Link key={subItem.title} href={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="py-4 px-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link href={item.href}>
                  <a className="block text-gray-700 hover:text-blue-600 font-medium">
                    {item.title}
                  </a>
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.title} href={subItem.href}>
                        <a className="block text-gray-600 hover:text-blue-600 text-sm">
                          {subItem.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}