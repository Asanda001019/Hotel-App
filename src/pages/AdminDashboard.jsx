import React, { useState, useMemo } from 'react';
import { FaTachometerAlt, FaPlusCircle, FaListAlt } from 'react-icons/fa'; // Import icons from react-icons
import 'tailwindcss/tailwind.css';

// Updated navigation items
const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <FaTachometerAlt className="text-gray-500" />, // Icon with Tailwind styling
  },
  {
    segment: 'add-accommodation',
    title: 'Add Accommodation',
    icon: <FaPlusCircle className="text-gray-500" />,
  },
  {
    segment: 'manage-accommodation',
    title: 'Manage Accommodation',
    icon: <FaListAlt className="text-gray-500" />,
  },
];

function DemoPageContent({ pathname }) {
  return (
    <div className="py-16 flex flex-col items-center text-center">
      <p className="text-lg font-semibold text-gray-700">Content for {pathname}</p>
    </div>
  );
}

function AdminDashboard({ window }) {
  const [pathname, setPathname] = useState('/dashboard');

  const router = useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <nav className="p-4">
          {NAVIGATION.map((item, index) => (
            <button
              key={index}
              onClick={() => setPathname(`/${item.segment}`)}
              className="flex items-center p-2 my-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 w-full rounded-lg"
            >
              {item.icon}
              <span className="ml-3 text-sm font-medium">{item.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <DemoPageContent pathname={pathname} />
      </div>
    </div>
  );
}

export default AdminDashboard;
