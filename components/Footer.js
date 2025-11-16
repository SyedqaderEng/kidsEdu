import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'Courses',
      links: [
        { title: 'Math', href: '/courses/math' },
        { title: 'Science', href: '/courses/science' },
        { title: 'Reading', href: '/courses/reading' },
        { title: 'Art & Creativity', href: '/courses/art' },
        { title: 'All Courses', href: '/courses' }
      ]
    },
    {
      title: 'Age Groups',
      links: [
        { title: 'Preschool (3-5)', href: '/ages/3-5' },
        { title: 'Elementary (6-8)', href: '/ages/6-8' },
        { title: 'Middle School (9-12)', href: '/ages/9-12' },
        { title: 'Age Guide', href: '/ages' }
      ]
    },
    {
      title: 'For Parents',
      links: [
        { title: 'Parent Dashboard', href: '/parents/dashboard' },
        { title: 'Progress Reports', href: '/parents/reports' },
        { title: 'Safety & Privacy', href: '/parents/safety' },
        { title: 'Parent Resources', href: '/parents' }
      ]
    },
    {
      title: 'For Educators',
      links: [
        { title: 'Teacher Tools', href: '/teachers/tools' },
        { title: 'Classroom Management', href: '/teachers/classroom' },
        { title: 'Curriculum Alignment', href: '/teachers/curriculum' },
        { title: 'Professional Development', href: '/teachers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { title: 'Help Center', href: '/support' },
        { title: 'Contact Us', href: '/contact' },
        { title: 'Community', href: '/community' },
        { title: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { title: 'About Us', href: '/about' },
        { title: 'Careers', href: '/careers' },
        { title: 'Press', href: '/press' },
        { title: 'Partnerships', href: '/partnerships' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/kidsedu',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kidsedu',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/kidsedu',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/kidsedu',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-white">
                KidsEdu
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering children through engaging, interactive learning experiences. 
              Safe, fun, and educational content for kids of all ages.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 KidsEdu. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}