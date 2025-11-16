export default function TrustSection() {
  const testimonials = [
    {
      quote: "My daughter has improved so much in math since using KidsEdu. The adaptive learning really works - it challenges her just enough without being overwhelming.",
      name: "Sarah Johnson",
      role: "Parent",
      location: "California, USA",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "As a teacher, I love how KidsEdu aligns with our curriculum. The progress tracking helps me understand each student's needs better.",
      name: "Michael Chen",
      role: "Elementary Teacher",
      location: "New York, USA",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The safety features give me peace of mind. My kids can learn independently while I know they're in a secure environment.",
      name: "Emily Rodriguez",
      role: "Homeschool Parent",
      location: "Texas, USA",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "KidsEdu has transformed our classroom. Students are more engaged and excited about learning than ever before.",
      name: "David Thompson",
      role: "School Principal",
      location: "Florida, USA",
      avatar: "/api/placeholder/60/60"
    }
  ];

  const certifications = [
    {
      name: 'COPPA Certified',
      description: 'Children\'s Online Privacy Protection Act compliant',
      icon: '🛡️'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality certified',
      icon: '🔒'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management certified',
      icon: '✅'
    },
    {
      name: 'FERPA Compliant',
      description: 'Family Educational Rights and Privacy Act compliant',
      icon: '📋'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Families Trust Us' },
    { number: '50,000+', label: 'Happy Children' },
    { number: '500+', label: 'Schools Partner' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Trust stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Trusted by Families{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Parents & Teachers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Security & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              View Trust Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}