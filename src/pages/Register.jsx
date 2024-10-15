import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/registerSlice"; // import the thunk from your slice

const Register = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.register); 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch registerUser and show alert on successful registration
    dispatch(registerUser({ email: formData.email, password: formData.password }))
      .unwrap() // allows us to use .then() and .catch() on the dispatched action
      .then(() => {
        alert("User has been signed up!");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
      <div className="flex flex-col items-end justify-start mb-2 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className="text-white">Dark Mode: &nbsp;</h3>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
              onClick={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600" />
          </label>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"} w-full p-5 sm:p-10 rounded-md`}
      >
        <h1 className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
          Register for a free account
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 ${darkMode ? "bg-[#302E30] text-white" : "bg-gray-100 text-black"}`}
                type="text"
                placeholder="Your first name"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 ${darkMode ? "bg-[#302E30] text-white" : "bg-gray-100 text-black"}`}
                type="text"
                placeholder="Your last name"
              />
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 ${darkMode ? "bg-[#302E30] text-white" : "bg-gray-100 text-black"}`}
              type="email"
              placeholder="Enter your email"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 ${darkMode ? "bg-[#302E30] text-white" : "bg-gray-100 text-black"}`}
              type="tel"
              placeholder="Enter your phone"
            />
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 ${darkMode ? "bg-[#302E30] text-white" : "bg-gray-100 text-black"}`}
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Register
            </button>
            {status === "loading" && <p className="text-white mt-2">Registering...</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?{" "}
              <a href="" className="text-[#E9522C] font-semibold">Login</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
