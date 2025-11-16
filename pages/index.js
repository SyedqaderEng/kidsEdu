import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>KidsEdu - Learn & Play</title>
        <meta name="description" content="KidsEdu theme powered by Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-r from-green-400 to-blue-500 relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">Welcome to KidsEdu</h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90">Engaging learning experiences for children</p>
          <button className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-lg transition">Get Started</button>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Interactive Lessons', 'Fun Quizzes', 'Progress Tracking'].map((feature) => (
              <div key={feature} className="p-6 border rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700">Curabitur vel urna nec dolor placerat elementum.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/500x300" alt="Illustration" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
