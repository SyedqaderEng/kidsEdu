export default function ValueProposition() {
  const benefits = [
    {
      title: 'Personalized Learning Paths',
      description: 'Our AI-powered system adapts to each child\'s learning style, pace, and interests. No two children learn the same way, so why should they follow the same path?',
      features: [
        'Adaptive difficulty adjustment',
        'Learning style assessment',
        'Interest-based content recommendations',
        'Progress-based unlocking system'
      ],
      image: '/api/placeholder/500/400',
      imageAlt: 'Child using personalized learning interface',
      reverse: false
    },
    {
      title: 'Safe & Secure Environment',
      description: 'Your child\'s safety and privacy are our top priorities. We\'ve built a completely secure learning environment that parents can trust.',
      features: [
        'COPPA compliant platform',
        'No ads or external links',
        'Moderated content and interactions',
        'Comprehensive parental controls'
      ],
      image: '/api/placeholder/500/400',
      imageAlt: 'Secure learning environment illustration',
      reverse: true
    },
    {
      title: 'Real-Time Progress Insights',
      description: 'Stay connected with your child\'s learning journey through detailed analytics and progress reports that help you support their growth.',
      features: [
        'Weekly progress reports',
        'Skill mastery tracking',
        'Learning time analytics',
        'Achievement celebrations'
      ],
      image: '/api/placeholder/500/400',
      imageAlt: 'Progress tracking dashboard',
      reverse: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {benefits.map((benefit, index) => (
          <div key={benefit.title} className={`flex flex-col ${benefit.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20 last:mb-0`}>
            {/* Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {benefit.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {benefit.description}
              </p>
              <ul className="space-y-4 mb-8">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl">
                  <img
                    src={benefit.image}
                    alt={benefit.imageAlt}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}