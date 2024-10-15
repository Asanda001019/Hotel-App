import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo or Home Link */}
        <Link to="/" className="text-white font-bold text-xl">
          Hotel App
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleNav}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links for Desktop and Mobile */}
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:items-center`}
        >
          <li>
            <Link className="text-white px-4 py-2 hover:bg-blue-500" to="/">
              Home
            </Link>
          </li>
          {/* <li>
            <Link className="text-white px-4 py-2 hover:bg-blue-500" to="/news">
              News
            </Link>
          </li> */}
          
          {/* Dropdown Menu for Sign In */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white px-4 py-2 hover:bg-blue-500 flex items-center"
            >
              Sign In
              <i className="ml-2 fa fa-caret-down"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded shadow-lg">
                <Link
                  to="/signin-user"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  User
                </Link>
                <Link
                  to="/signin-admin"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Admin
                </Link>
              </div>
            )}
          </li>

          {/* Dropdown Menu for Register */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white px-4 py-2 hover:bg-blue-500 flex items-center"
            >
              Register
              <i className="ml-2 fa fa-caret-down"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded shadow-lg">
                <Link
                  to="/registeruser"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  User
                </Link>
                <Link
                  to="/registerAdmin"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Admin
                </Link>
              </div>
            )}
          </li>

          {/* Other Links */}
          <li>
            <Link className="text-white px-4 py-2 hover:bg-blue-500" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="text-white px-4 py-2 hover:bg-blue-500" to="/accommodations">
              Accommodations
            </Link>
          </li>
          <li>
            <Link className="text-white px-4 py-2 hover:bg-blue-500" to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
