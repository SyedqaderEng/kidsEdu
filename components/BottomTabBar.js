import React from 'react';
import Link from 'next/link';
import { Home, BookOpen, Gamepad2, BarChart2, User } from 'lucide-react';

const tabs = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Learn', href: '/', icon: BookOpen },
  { name: 'Games', href: '/games', icon: Gamepad2 },
  { name: 'Progress', href: '/progress', icon: BarChart2 },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function BottomTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t md:hidden">
      <ul className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <li key={tab.name}>
              <Link href={tab.href} className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{tab.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
