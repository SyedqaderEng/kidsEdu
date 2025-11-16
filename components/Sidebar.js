
import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    name: "Session & Progress",
    icon: "🚀", // Placeholder icon
    features: [
      "Auto-Save Progress System",
      "Smart Resume Dashboard",
      "Multi-Device Sync Engine",
      "Progress Breadcrumb Trail",
      "Daily Goals Completion Tracker",
    ],
  },
  {
    name: "Reading & Literacy",
    icon: "📚",
    features: [
      "Phonics Mastery Course",
      "Sight Words Challenge",
      "Reading Comprehension Builder",
      "Vocabulary Expansion Games",
      "Spelling Bee Academy",
    ],
  },
  {
    name: "Writing & Composition",
    icon: "✍️",
    features: [
      "Sentence Building Workshop",
      "Creative Story Creator",
      "Grammar Fundamentals",
      "Paragraph Construction Lab",
      "Handwriting Practice Studio",
    ],
  },
  {
    name: "Mathematics Fundamentals",
    icon: "➕",
    features: [
      "Number Sense Basics",
      "Addition & Subtraction Mastery",
      "Multiplication Tables Quest",
      "Fractions & Decimals Intro",
      "Word Problems Solver",
    ],
  },
  {
    name: "Advanced Mathematics",
    icon: "📈",
    features: [
      "Geometry Explorer",
      "Pre-Algebra Foundations",
      "Data & Statistics",
      "Money Math Master",
      "Measurement & Conversion",
    ],
  },
  {
    name: "Science Exploration",
    icon: "🔬",
    features: [
      "Life Science Adventures",
      "Physical Science Lab",
      "Earth & Space Studies",
      "Human Body Systems",
      "Scientific Method Workshop",
    ],
  },
  {
    name: "Coding & Programming",
    icon: "💻",
    features: [
      "Block Coding Basics",
      "Python for Kids",
      "Web Development Starter",
      "Game Design Academy",
      "Algorithm & Logic Training",
    ],
  },
  {
    name: "Social Studies & Geography",
    icon: "🌍",
    features: [
      "World Geography Explorer",
      "US History Timeline",
      "Map Skills Master",
      "Community & Citizenship",
      "Cultural Diversity Journey",
    ],
  },
  {
    name: "Creative Arts",
    icon: "🎨",
    features: [
      "Digital Art Studio",
      "Animation Creator",
      "Music Composition Lab",
      "Design & Pattern Maker",
      "Storytelling Through Art",
    ],
  },
  {
    name: "Language Learning",
    icon: "🗣️",
    features: [
      "Spanish for Kids",
      "French Fundamentals",
      "Mandarin Chinese Basics",
      "Sign Language (ASL)",
      "World Languages Tour",
    ],
  },
  {
    name: "Critical Thinking & Logic",
    icon: "🤔",
    features: [
      "Logic Puzzle Challenges",
      "Problem-Solving Strategies",
      "Chess Academy",
      "Memory Enhancement Games",
      "Brain Teasers Collection",
    ],
  },
  {
    name: "Life Skills & Character",
    icon: "🌱",
    features: [
      "Emotional Intelligence",
      "Social Skills Builder",
      "Growth Mindset Training",
      "Time Management for Kids",
      "Money & Financial Literacy",
    ],
  },
  {
    name: "Physical Education & Health",
    icon: "🏃",
    features: [
      "Fitness Fun Activities",
      "Nutrition Education",
      "Safety & First Aid",
      "Hygiene Habits",
      "Mindfulness & Relaxation",
    ],
  },
  {
    name: "Advanced STEM",
    icon: "🔬",
    features: [
      "Robotics Introduction",
      "Engineering Challenges",
      "Environmental Science",
      "Astronomy & Space",
      "Inventors & Innovations",
    ],
  },
  {
    name: "Test Preparation",
    icon: "📝",
    features: [
      "Standardized Test Practice",
      "Diagnostic Assessments",
      "Grade-Level Readiness",
      "Timed Challenge Mode",
      "Subject Mastery Tests",
    ],
  },
  {
    name: "Interactive Games Library",
    icon: "🎮",
    features: [
      "Math Racing Games",
      "Word Adventure Quest",
      "Science Lab Simulator",
      "History Time Machine",
      "Geography Treasure Hunt",
    ],
  },
  {
    name: "Personalized Learning Paths",
    icon: "🌟",
    features: [
      "AI Adaptive Curriculum",
      "Strength-Based Learning",
      "Gap-Filling Program",
      "Interest-Based Projects",
      "Custom Learning Goals",
    ],
  },
  {
    name: "Parent & Teacher Tools",
    icon: "👩‍🏫",
    features: [
      "Progress Dashboard",
      "Report Card Generator",
      "Content Controls",
      "Communication Hub",
      "Resource Library",
    ],
  },
  {
    name: "Collaborative Learning",
    icon: "🤝",
    features: [
      "Virtual Study Groups",
      "Team Challenges",
      "Peer Review System",
      "Multiplayer Educational Games",
      "Class Leaderboards",
    ],
  },
  {
    name: "Special Features",
    icon: "✨",
    features: [
      "AI Tutor Assistant",
      "Voice Recognition Practice",
      "Offline Mode",
      "Accessibility Tools",
      "Integration Hub",
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:inset-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <h2 className="text-xl font-bold text-indigo-700">KidsEdu</h2>
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="p-4 flex-grow overflow-y-auto">
        <ul>
          {categories.map((category) => (
            <li key={category.name} className="mb-2">
              <button
                onClick={() => handleCategoryClick(category.name)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                <span className="flex items-center">
                  <span className="mr-2 text-xl">{category.icon}</span>
                  {category.name}
                </span>
                <svg
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    openCategory === category.name ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {openCategory === category.name && (
                <ul className="ml-8 mt-1 space-y-1">
                  {category.features.map((feature) => (
                    <li key={feature}>
                      <Link href={`/course/${feature.toLowerCase().replace(/\s+/g, '-')}`} className="block p-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                        {feature}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
