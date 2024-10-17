import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaPlusCircle, FaListAlt, FaUser } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const NAVIGATION = [
  { path: '/admin/dashboard', title: 'Dashboard', icon: <FaTachometerAlt /> },
  { path: '/add-accommodation', title: 'Add Accommodation', icon: <FaPlusCircle /> },
  { path: '/view-manage', title: 'Manage Accommodation', icon: <FaListAlt /> },
  { path: '/admin/profile', title: 'Admin Profile', icon: <FaUser /> },
];

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <nav className="p-4">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center p-2 my-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100 w-full rounded-lg"
            >
              {item.icon}
              <span className="ml-3 text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Renders the content for the selected route */}
      </main>
    </div>
  );
}

export default AdminDashboard;
