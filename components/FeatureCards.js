export default function FeatureCards() {
  const features = [
    {
      category: 'By Subject',
      items: [
        {
          title: 'Math Adventures',
          description: 'Interactive math games and puzzles that make numbers fun',
          icon: '🔢',
          color: 'from-blue-400 to-blue-600'
        },
        {
          title: 'Reading Journey',
          description: 'Phonics, vocabulary, and comprehension through stories',
          icon: '📚',
          color: 'from-green-400 to-green-600'
        },
        {
          title: 'Science Lab',
          description: 'Virtual experiments and scientific discoveries',
          icon: '🔬',
          color: 'from-purple-400 to-purple-600'
        },
        {
          title: 'Art Studio',
          description: 'Creative tools for drawing, painting, and design',
          icon: '🎨',
          color: 'from-pink-400 to-pink-600'
        }
      ]
    },
    {
      category: 'By Age Group',
      items: [
        {
          title: 'Preschool (3-5)',
          description: 'Basic concepts through play and exploration',
          icon: '🧸',
          color: 'from-yellow-400 to-orange-500'
        },
        {
          title: 'Elementary (6-8)',
          description: 'Core subjects with interactive lessons',
          icon: '🎒',
          color: 'from-teal-400 to-cyan-600'
        },
        {
          title: 'Middle School (9-12)',
          description: 'Advanced topics and critical thinking skills',
          icon: '🎓',
          color: 'from-indigo-400 to-purple-600'
        }
      ]
    },
    {
      category: 'By Feature',
      items: [
        {
          title: 'Adaptive Learning',
          description: 'Personalized content that adjusts to each child\'s pace',
          icon: '🧠',
          color: 'from-emerald-400 to-teal-600'
        },
        {
          title: 'Progress Tracking',
          description: 'Detailed reports for parents and teachers',
          icon: '📊',
          color: 'from-blue-400 to-indigo-600'
        },
        {
          title: 'Safe Environment',
          description: 'COPPA compliant with robust privacy protection',
          icon: '🛡️',
          color: 'from-green-400 to-emerald-600'
        },
        {
          title: 'Offline Mode',
          description: 'Download content for learning anywhere, anytime',
          icon: '📱',
          color: 'from-purple-400 to-pink-600'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything Your Child Needs to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational content organized by subject, age, and learning style. 
            Discover the perfect learning path for your child.
          </p>
        </div>

        {features.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.items.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
              {category.items.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}