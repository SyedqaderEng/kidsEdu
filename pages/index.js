import Head from 'next/head';
import CourseCard from '../components/CourseCard'; // I will create this component

const courses = [
  {
    id: 1,
    title: "Phonics Mastery Course",
    image: "/placeholder.png",
    progress: 75,
    time: "25 min",
    difficulty: 3,
  },
  {
    id: 2,
    title: "Multiplication Tables Quest",
    image: "/placeholder.png",
    progress: 30,
    time: "40 min",
    difficulty: 2,
  },
  {
    id: 3,
    title: "Creative Story Creator",
    image: "/placeholder.png",
    progress: 90,
    time: "30 min",
    difficulty: 4,
  },
  {
    id: 4,
    title: "World Geography Explorer",
    image: "/placeholder.png",
    progress: 50,
    time: "45 min",
    difficulty: 3,
  },
  {
    id: 5,
    title: "Digital Art Studio",
    image: "/placeholder.png",
    progress: 60,
    time: "35 min",
    difficulty: 2,
  },
  {
    id: 6,
    title: "Block Coding Basics",
    image: "/placeholder.png",
    progress: 20,
    time: "60 min",
    difficulty: 4,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>KidsEdu - Learn, Play, Grow | Safe Educational Platform for Children</title>
        <meta name="description" content="Engaging educational experiences that make learning fun and effective. Safe, interactive content designed by educators for children of all ages." />
        <meta name="keywords" content="kids education, online learning, children, safe learning platform, interactive education" />
        <meta property="og:title" content="KidsEdu - Learn, Play, Grow" />
        <meta property="og:description" content="Engaging educational experiences that make learning fun and effective." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-8">
        {/* Hero Section/Banner Placeholder */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome to KidsEdu!</h1>
          <p className="text-lg">Your adventure in learning starts here. Explore our fun courses!</p>
          {/* Add rotating carousel, continue learning cards, daily challenge banner, streak counter here */}
          <div className="mt-4 bg-white bg-opacity-20 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Featured Courses & Daily Challenges</h2>
            <p className="text-sm">Placeholder for dynamic content</p>
          </div>
        </section>

        {/* Course Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
