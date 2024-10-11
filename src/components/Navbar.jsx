// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/signin-user">Sign In (User)</Link></li>
        <li><Link className="text-white" to="/signin-admin">Sign In (Admin)</Link></li>
        <li><Link className="text-white" to="/register">Register</Link></li>
        <li><Link className="text-white" to="/profile">Profile</Link></li>
        <li><Link className="text-white" to="/accommodations">Accommodations</Link></li>
        <li><Link className="text-white" to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
