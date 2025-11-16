import Head from 'next/head';
import Link from 'next/link';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: "Phonics Mastery Course", image: "/placeholder.png", progress: 75, time: "25 min", difficulty: 3 },
  { id: 2, title: "Multiplication Tables Quest", image: "/placeholder.png", progress: 30, time: "40 min", difficulty: 2 },
  { id: 3, title: "Creative Story Creator", image: "/placeholder.png", progress: 90, time: "30 min", difficulty: 4 },
  { id: 4, title: "World Geography Explorer", image: "/placeholder.png", progress: 50, time: "45 min", difficulty: 3 },
  { id: 5, title: "Digital Art Studio", image: "/placeholder.png", progress: 60, time: "35 min", difficulty: 2 },
  { id: 6, title: "Block Coding Basics", image: "/placeholder.png", progress: 20, time: "60 min", difficulty: 4 },
];

export default function Home() {
  const continueCourses = courses.filter(c => c.progress > 0).slice(0,4);
  const dailyChallenge = { title: 'Daily Challenge: Sight Words', description: 'Practice 10 new sight words today and earn a badge!', link: '/challenges' };
  const categories = [
    { name: 'Reading & Literacy', items: ['Phonics Mastery Course', 'Sight Words Challenge', 'Reading Comprehension Builder', 'Vocabulary Expansion Games', 'Spelling Bee Academy'] },
    { name: 'Writing & Composition', items: ['Sentence Building Workshop', 'Creative Story Creator', 'Grammar Fundamentals', 'Paragraph Construction Lab', 'Handwriting Practice Studio'] },
    { name: 'Mathematics Fundamentals', items: ['Number Sense Basics', 'Addition & Subtraction Mastery', 'Multiplication Tables Quest', 'Fractions & Decimals Intro', 'Word Problems Solver'] },
    { name: 'Science Exploration', items: ['Life Science Adventures', 'Physical Science Lab', 'Earth & Space Studies', 'Human Body Systems', 'Scientific Method Workshop'] },
    { name: 'Creative Arts', items: ['Digital Art Studio', 'Animation Creator', 'Music Composition Lab', 'Design & Pattern Maker', 'Storytelling Through Art'] },
  ];

  return (
    <>
      <Head>
        <title>KidsEdu - Learn, Play, Grow | Safe Educational Platform for Children</title>
        <meta name="description" content="Engaging, safe, and interactive learning experiences for children." />
        <meta name="keywords" content="kids education, online learning, children, safe learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-20 space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to KidsEdu!</h1>
          <p className="text-xl mb-6">Your adventure in learning starts here.</p>
          <Link href="/signup" className="btn-primary">Get Started</Link>
        </section>

        {/* Continue Learning */}
        {continueCourses.length > 0 && (
          <section className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {continueCourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
          </section>
        )}

        {/* Daily Challenge */}
        <section className="bg-yellow-100 py-12">
          <div className="container mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{dailyChallenge.title}</h3>
              <p className="text-gray-700 mb-4">{dailyChallenge.description}</p>
              <Link href={dailyChallenge.link} className="btn-secondary">Take Challenge</Link>
            </div>
            <div className="mt-6 md:mt-0">
              <img src="/daily-challenge.png" alt="Daily Challenge" className="w-48 h-48 object-cover rounded" />
            </div>
          </div>
        </section>

        {/* Explore by Category */}
        <section className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Explore by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map(cat => (
              <div key={cat.name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{cat.name}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {cat.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
