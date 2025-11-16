import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  BookOpen,
  Edit3,
  Hash,
  TrendingUp,
  Microscope,
  Code,
  Globe2,
  Palette,
  Volume2,
  Cpu,
  Leaf,
  HeartPulse,
  Zap,
  FileText,
  Gamepad2,
  Settings2,
  Users,
  Star,
  ChevronRight,
} from 'lucide-react';

// Sidebar categories with enhanced metadata
const categories = [
  {
    name: 'Session & Progress',
    icon: Activity,
    completedCount: 2,
    newContent: false,
    recommended: true,
    features: [
      'Auto-Save Progress System',
      'Smart Resume Dashboard',
      'Multi-Device Sync Engine',
      'Progress Breadcrumb Trail',
      'Daily Goals Completion Tracker',
    ],
  },
  {
    name: 'Reading & Literacy',
    icon: BookOpen,
    completedCount: 3,
    newContent: true,
    recommended: true,
    features: [
      'Phonics Mastery Course',
      'Sight Words Challenge',
      'Reading Comprehension Builder',
      'Vocabulary Expansion Games',
      'Spelling Bee Academy',
    ],
  },
  {
    name: 'Writing & Composition',
    icon: Edit3,
    completedCount: 1,
    newContent: false,
    recommended: false,
    features: [
      'Sentence Building Workshop',
      'Creative Story Creator',
      'Grammar Fundamentals',
      'Paragraph Construction Lab',
      'Handwriting Practice Studio',
    ],
  },
  {
    name: 'Mathematics Fundamentals',
    icon: Hash,
    completedCount: 4,
    newContent: false,
    recommended: true,
    features: [
      'Number Sense Basics',
      'Addition & Subtraction Mastery',
      'Multiplication Tables Quest',
      'Fractions & Decimals Intro',
      'Word Problems Solver',
    ],
  },
  {
    name: 'Advanced STEM',
    icon: Zap,
    completedCount: 0,
    newContent: false,
    recommended: false,
    features: [
      'Robotics Introduction',
      'Engineering Challenges',
      'Environmental Science',
      'Astronomy & Space',
      'Inventors & Innovations',
    ],
  },
  {
    name: 'Special Features',
    icon: Star,
    completedCount: 0,
    newContent: true,
    recommended: false,
    features: [
      'AI Tutor Assistant',
      'Voice Recognition Practice',
      'Offline Mode',
      'Accessibility Tools',
      'Integration Hub',
    ],
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (name) => setOpenCategory(openCategory === name ? null : name);

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <h2 className="text-xl font-bold text-indigo-700">KidsEdu</h2>
        <button onClick={toggleSidebar} aria-label="Close sidebar" className="text-gray-500 hover:text-gray-700">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
      </div>
      <nav className="p-4 overflow-y-auto h-full">
        <ul>
          {categories.map((cat) => (
            <li key={cat.name} className="mb-2">
              <button
                title={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <cat.icon className="w-6 h-6 text-indigo-600" />
                  <span className="ml-2 font-medium">{cat.name}</span>
                  {cat.completedCount > 0 && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-1 rounded">{cat.completedCount}/{cat.features.length}</span>
                  )}
                  {cat.newContent && <span className="ml-1 bg-green-100 text-green-800 text-xs px-1 rounded">New</span>}
                  {cat.recommended && <Star className="ml-1 w-4 h-4 text-yellow-500" title="Recommended" />}
                </div>
                <ChevronRight className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${openCategory === cat.name ? 'rotate-90' : ''}`} />
              </button>
              {openCategory === cat.name && (
                <ul className="mt-1 ml-8 space-y-1">
                  {cat.features.map((feat) => (
                    <li key={feat}>
                      <Link href={`/course/${feat.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center p-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                        <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                        {feat}
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
}
import Link from 'next/link';
import {
  Activity,
  BookOpen,
  Edit3,
  Hash,
  TrendingUp,
  Microscope,
  Code,
  Globe2,
  Palette,
  Volume2,
  Cpu,
  Leaf,
  HeartPulse,
  Zap,
  FileText,
  Gamepad2,
  Settings2,
  Users,
  Star,
  ChevronRight,
} from 'lucide-react';

// Sidebar categories with metadata
const categories = [
  { name: 'Session & Progress', icon: Activity, completedCount: 2, newContent: false, recommended: true, features: [
      'Auto-Save Progress System','Smart Resume Dashboard','Multi-Device Sync Engine',
      'Progress Breadcrumb Trail','Daily Goals Completion Tracker',
    ]
  },
  { name: 'Reading & Literacy', icon: BookOpen, completedCount: 3, newContent: true, recommended: true, features: [
      'Phonics Mastery Course','Sight Words Challenge','Reading Comprehension Builder',
      'Vocabulary Expansion Games','Spelling Bee Academy',
    ]
  },
  { name: 'Writing & Composition', icon: Edit3, completedCount: 1, newContent: false, recommended: false, features: [
      'Sentence Building Workshop','Creative Story Creator','Grammar Fundamentals',
      'Paragraph Construction Lab','Handwriting Practice Studio',
    ]
  },
  { name: 'Mathematics Fundamentals', icon: Hash, completedCount: 4, newContent: false, recommended: true, features: [
      'Number Sense Basics','Addition & Subtraction Mastery','Multiplication Tables Quest',
      'Fractions & Decimals Intro','Word Problems Solver',
    ]
  },
  { name: 'Science Exploration', icon: Microscope, completedCount: 2, newContent: false, recommended: false, features: [
      'Life Science Adventures','Physical Science Lab','Earth & Space Studies',
      'Human Body Systems','Scientific Method Workshop',
    ]
  },
  { name: 'Coding & Programming', icon: Code, completedCount: 0, newContent: true, recommended: false, features: [
      'Block Coding Basics','Python for Kids','Web Development Starter',
      'Game Design Academy','Algorithm & Logic Training',
    ]
  },
  { name: 'Social Studies & Geography', icon: Globe2, completedCount: 1, newContent: false, recommended: false, features: [
      'World Geography Explorer','US History Timeline','Map Skills Master',
      'Community & Citizenship','Cultural Diversity Journey',
    ]
  },
  { name: 'Creative Arts', icon: Palette, completedCount: 0, newContent: false, recommended: false, features: [
      'Digital Art Studio','Animation Creator','Music Composition Lab',
      'Design & Pattern Maker','Storytelling Through Art',
    ]
  },
  { name: 'Language Learning', icon: Volume2, completedCount: 0, newContent: false, recommended: false, features: [
      'Spanish for Kids','French Fundamentals','Mandarin Chinese Basics',
      'Sign Language (ASL)','World Languages Tour',
    ]
  },
  { name: 'Critical Thinking & Logic', icon: Cpu, completedCount: 0, newContent: false, recommended: false, features: [
      'Logic Puzzle Challenges','Problem-Solving Strategies','Chess Academy',
      'Memory Enhancement Games','Brain Teasers Collection',
    ]
  },
  { name: 'Life Skills & Character', icon: Leaf, completedCount: 0, newContent: false, recommended: false, features: [
      'Emotional Intelligence','Social Skills Builder','Growth Mindset Training',
      'Time Management for Kids','Money & Financial Literacy',
    ]
  },
  { name: 'Physical Education & Health', icon: HeartPulse, completedCount: 0, newContent: false, recommended: false, features: [
      'Fitness Fun Activities','Nutrition Education','Safety & First Aid',
      'Hygiene Habits','Mindfulness & Relaxation',
    ]
  },
  { name: 'Advanced Mathematics', icon: TrendingUp, completedCount: 0, newContent: false, recommended: false, features: [
      'Geometry Explorer','Pre-Algebra Foundations','Data & Statistics',
      'Money Math Master','Measurement & Conversion',
    ]
  },
  { name: 'Advanced STEM', icon: Zap, completedCount: 0, newContent: false, recommended: false, features: [
      'Robotics Introduction','Engineering Challenges','Environmental Science',
      'Astronomy & Space','Inventors & Innovations',
    ]
  },
  { name: 'Test Preparation', icon: FileText, completedCount: 0, newContent: false, recommended: false, features: [
      'Standardized Test Practice','Diagnostic Assessments','Grade-Level Readiness',
      'Timed Challenge Mode','Subject Mastery Tests',
    ]
  },
  { name: 'Interactive Games Library', icon: Gamepad2, completedCount: 0, newContent: false, recommended: false, features: [
      'Math Racing Games','Word Adventure Quest','Science Lab Simulator',
      'History Time Machine','Geography Treasure Hunt',
    ]
  },
  { name: 'Personalized Learning Paths', icon: Settings2, completedCount: 0, newContent: true, recommended: false, features: [
      'AI Adaptive Curriculum','Strength-Based Learning','Gap-Filling Program',
      'Interest-Based Projects','Custom Learning Goals',
    ]
  },
  { name: 'Parent & Teacher Tools', icon: Users, completedCount: 0, newContent: false, recommended: false, features: [
      'Progress Dashboard','Report Card Generator','Content Controls',
      'Communication Hub','Resource Library',
    ]
  },
  { name: 'Collaborative Learning', icon: Users, completedCount: 0, newContent: false, recommended: false, features: [
      'Virtual Study Groups','Team Challenges','Peer Review System',
      'Multiplayer Educational Games','Class Leaderboards',
    ]
  },
  { name: 'Special Features', icon: Star, completedCount: 0, newContent: true, recommended: false, features: [
      'AI Tutor Assistant','Voice Recognition Practice','Offline Mode',
      'Accessibility Tools','Integration Hub',
    ]
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (name) => setOpenCategory(openCategory === name ? null : name);

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform duration-300 ease-in-out`}>  
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <h2 className="text-xl font-bold text-indigo-700">KidsEdu</h2>
        <button onClick={toggleSidebar} aria-label="Close sidebar" className="text-gray-500 hover:text-gray-700">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
      </div>
      <nav className="p-4 overflow-y-auto h-full">
        <ul>
          {categories.map((cat) => (
            <li key={cat.name} className="mb-2">
              <button
                title={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <cat.icon className="w-6 h-6 text-indigo-600" />
                  <span className="ml-2 font-medium">{cat.name}</span>
                  {cat.completedCount > 0 && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-1 rounded">{cat.completedCount}/{cat.features.length}</span>
                  )}
                  {cat.newContent && (<span className="ml-1 bg-green-100 text-green-800 text-xs px-1 rounded">New</span>)}
                  {cat.recommended && <Star className="ml-1 w-4 h-4 text-yellow-500" title="Recommended" />}                 }
                </div>
                <ChevronRight className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${openCategory === cat.name ? 'rotate-90' : ''}`} />
              </button>
              {openCategory === cat.name && (
                <ul className="mt-1 ml-8 space-y-1">
                  {cat.features.map((feat) => (
                    <li key={feat}>
                      <Link href={`/course/${feat.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center p-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                        <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                        {feat}
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
}
import Link from 'next/link';
import {
  Activity,
  BookOpen,
  Edit3,
  Hash,
  TrendingUp,
  Microscope,
  Code,
  Globe2,
  Palette,
  Volume2,
  Cpu,
  Leaf,
  HeartPulse,
  Zap,
  FileText,
  Gamepad2,
  Settings2,
  Users,
  Star,
  ChevronRight,
} from 'lucide-react';

// Sidebar categories with enhanced metadata
const categories = [
  {
    name: 'Session & Progress',
    icon: Activity,
    completedCount: 2,
    newContent: false,
    recommended: true,
    features: [
      'Auto-Save Progress System',
      'Smart Resume Dashboard',
      'Multi-Device Sync Engine',
      'Progress Breadcrumb Trail',
      'Daily Goals Completion Tracker',
    ],
  },
  {
    name: 'Reading & Literacy',
    icon: BookOpen,
    completedCount: 3,
    newContent: true,
    recommended: true,
    features: [
      'Phonics Mastery Course',
      'Sight Words Challenge',
      'Reading Comprehension Builder',
      'Vocabulary Expansion Games',
      'Spelling Bee Academy',
    ],
  },
  {
    name: 'Writing & Composition',
    icon: Edit3,
    completedCount: 1,
    newContent: false,
    recommended: false,
    features: [
      'Sentence Building Workshop',
      'Creative Story Creator',
      'Grammar Fundamentals',
      'Paragraph Construction Lab',
      'Handwriting Practice Studio',
    ],
  },
  {
    name: 'Mathematics Fundamentals',
    icon: Hash,
    completedCount: 4,
    newContent: false,
    recommended: true,
    features: [
      'Number Sense Basics',
      'Addition & Subtraction Mastery',
      'Multiplication Tables Quest',
      'Fractions & Decimals Intro',
      'Word Problems Solver',
    ],
  },
  {
    name: 'Advanced STEM',
    icon: Zap,
    completedCount: 0,
    newContent: false,
    recommended: false,
    features: [
      'Robotics Introduction',
      'Engineering Challenges',
      'Environmental Science',
      'Astronomy & Space',
      'Inventors & Innovations',
    ],
  },
  {
    name: 'Special Features',
    icon: Star,
    completedCount: 0,
    newContent: true,
    recommended: false,
    features: [
      'AI Tutor Assistant',
      'Voice Recognition Practice',
      'Offline Mode',
      'Accessibility Tools',
      'Integration Hub',
    ],
  },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (name) =>
    setOpenCategory(openCategory === name ? null : name);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static transition-transform duration-300 ease-in-out`}
    >
      {/* Mobile header */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <h2 className="text-xl font-bold text-indigo-700">KidsEdu</h2>
        <button
          onClick={toggleSidebar}
          aria-label="Close sidebar"
          className="text-gray-500 hover:text-gray-700"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
      </div>
      {/* Categories */}
      <nav className="p-4 overflow-y-auto h-full">
        <ul>
          {categories.map((cat) => (
            <li key={cat.name} className="mb-2">
              <button
                title={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <cat.icon className="w-6 h-6 text-indigo-600" />
                  <span className="ml-2 font-medium">{cat.name}</span>
                  {cat.completedCount > 0 && (
                    <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-1 rounded">
                      {cat.completedCount}/{cat.features.length}
                    </span>
                  )}
                  {cat.newContent && (
                    <span className="ml-1 bg-green-100 text-green-800 text-xs px-1 rounded">
                      New
                    </span>
                  )}
                  {cat.recommended && (
                    <Star className="ml-1 w-4 h-4 text-yellow-500" title="Recommended" />
                  )}
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                    openCategory === cat.name ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openCategory === cat.name && (
                <ul className="mt-1 ml-8 space-y-1">
                  {cat.features.map((feat) => (
                    <li key={feat}>
                      <Link
                        href={`/course/${feat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center p-2 text-sm text-gray-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                      >
                        <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
                        {feat}
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
}
