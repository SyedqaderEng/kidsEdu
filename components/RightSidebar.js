import React from 'react';

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-80 p-4 space-y-6">
      {/* Today's Goals */}
      <div className="bg-white rounded-2xl p-4 shadow-soft">
        <h3 className="font-semibold text-gray-800 mb-2">Today's Goals</h3>
        <ul className="list-inside list-disc text-sm text-gray-600">
          <li>Complete 2 lessons</li>
          <li>Practice spelling</li>
          <li>Finish daily challenge</li>
        </ul>
      </div>
      {/* Leaderboard */}
      <div className="bg-white rounded-2xl p-4 shadow-soft">
        <h3 className="font-semibold text-gray-800 mb-2">Leaderboard</h3>
        <ol className="list-decimal list-inside text-sm text-gray-600">
          <li>Alice - 1200pts</li>
          <li>Bob - 1100pts</li>
          <li>Charlie - 1000pts</li>
          <li>Daisy - 900pts</li>
          <li>Eric - 800pts</li>
        </ol>
      </div>
      {/* Achievements */}
      <div className="bg-white rounded-2xl p-4 shadow-soft">
        <h3 className="font-semibold text-gray-800 mb-2">Achievements</h3>
        <p className="text-sm text-gray-600">You earned the 'Math Whiz' badge!</p>
      </div>
      {/* AI Tutor Chat */}
      <div className="bg-white rounded-2xl p-4 shadow-soft flex items-center justify-center h-24">
        <button className="btn-primary">AI Tutor Chat</button>
      </div>
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-4 shadow-soft">
        <h3 className="font-semibold text-gray-800 mb-2">Upcoming Events</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Math Tournament - Nov 20</li>
          <li>Story Contest - Nov 22</li>
        </ul>
      </div>
    </aside>
  );
}