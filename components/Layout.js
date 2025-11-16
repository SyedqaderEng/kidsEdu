import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><a className="text-xl font-bold text-blue-600">KidsEdu</a></Link>
          <div className="space-x-4">
            <Link href="/"><a className="text-gray-600 hover:text-blue-600">Home</a></Link>
            <Link href="/about"><a className="text-gray-600 hover:text-blue-600">About</a></Link>
            <Link href="/curriculum"><a className="text-gray-600 hover:text-blue-600">Curriculum</a></Link>
            <Link href="/contact"><a className="text-gray-600 hover:text-blue-600">Contact</a></Link>
          </div>
          <Link href="/get-started"><a className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</a></Link>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-white">
          &copy; {new Date().getFullYear()} KidsEdu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
