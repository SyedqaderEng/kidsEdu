

import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react'; // Placeholder for icons

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/course/${course.id}`}>
        <div className="relative w-full h-40">
          <Image
            src={course.image}
            alt={course.title}
            fill // Replaced layout="fill" and objectFit="cover"
            className="rounded-t-xl object-cover" // Added object-cover to className
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{course.progress}% Complete</p>

          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>{course.time}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < course.difficulty ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill={i < course.difficulty ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>
          
          <button className="w-full py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-full hover:shadow-md transition-all duration-200 transform hover:scale-105">
            {course.progress > 0 ? "Continue Learning" : "Start Learning"}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;

