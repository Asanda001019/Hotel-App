import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignInUser = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-gray-100 px-5">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-navy-600 mb-6">Create Your Account</h1>
        
        <form className="space-y-4">
          {/* Name Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Surname Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Username Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-navy-600 text-black font-semibold py-3 rounded-lg hover:bg-navy-200 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-navy-600 font-semibold hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInUser;
