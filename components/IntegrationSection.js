export default function IntegrationSection() {
  const integrations = [
    {
      name: 'Google Classroom',
      logo: '/api/placeholder/120/60',
      category: 'LMS'
    },
    {
      name: 'Canvas',
      logo: '/api/placeholder/120/60',
      category: 'LMS'
    },
    {
      name: 'Schoology',
      logo: '/api/placeholder/120/60',
      category: 'LMS'
    },
    {
      name: 'Microsoft Teams',
      logo: '/api/placeholder/120/60',
      category: 'Communication'
    },
    {
      name: 'Zoom',
      logo: '/api/placeholder/120/60',
      category: 'Communication'
    },
    {
      name: 'Khan Academy',
      logo: '/api/placeholder/120/60',
      category: 'Educational'
    },
    {
      name: 'Common Core',
      logo: '/api/placeholder/120/60',
      category: 'Standards'
    },
    {
      name: 'IXL Learning',
      logo: '/api/placeholder/120/60',
      category: 'Educational'
    },
    {
      name: 'Clever',
      logo: '/api/placeholder/120/60',
      category: 'SSO'
    },
    {
      name: 'ClassLink',
      logo: '/api/placeholder/120/60',
      category: 'SSO'
    },
    {
      name: 'PowerSchool',
      logo: '/api/placeholder/120/60',
      category: 'SIS'
    },
    {
      name: 'Infinite Campus',
      logo: '/api/placeholder/120/60',
      category: 'SIS'
    }
  ];

  const categories = [
    {
      title: 'Learning Management Systems',
      description: 'Seamlessly integrate with your existing LMS platform',
      icon: '🎓',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Communication Tools',
      description: 'Connect with video conferencing and messaging platforms',
      icon: '💬',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Educational Resources',
      description: 'Enhance learning with complementary educational tools',
      icon: '📚',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Single Sign-On',
      description: 'Secure, easy access through your school\'s SSO system',
      icon: '🔐',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Integrates with Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Favorite Tools
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KidsEdu works seamlessly with the educational tools and platforms you already use. 
            No disruption to your existing workflow.
          </p>
        </div>

        {/* Integration categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Trusted Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-gray-50 rounded-xl p-4 w-full h-20 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xs text-gray-500 mt-2 text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your tool? We're constantly adding new integrations.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Request Integration
            </button>
          </div>
        </div>

        {/* API section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Need a Custom Integration?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our robust API allows you to build custom integrations and connect KidsEdu 
              with any system in your educational technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                View API Docs
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}