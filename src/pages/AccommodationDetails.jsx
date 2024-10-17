import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodations } from './AccommodationList'; // Import the accommodations data

export default function AccommodationDetails() {
  const { id } = useParams();
  const accommodation = accommodations.find((acc) => acc.id === parseInt(id)); // Find the accommodation by ID
  const navigate = useNavigate(); // Hook to navigate programmatically

  // State for booking form inputs
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  if (!accommodation) {
    return <p>Accommodation not found.</p>; // Handle case where accommodation is not found
  }

  // Handle form submission
  const handleBooking = (e) => {
    e.preventDefault();
    // You can also add logic here to save booking details or validate inputs
    const bookingDetails = {
      accommodationId: accommodation.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: numberOfGuests,
    };
    console.log(bookingDetails); // For now, just log the details
    navigate('/cart', { state: { bookingDetails } }); // Navigate to the cart page with booking details
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{accommodation.name}</h1>
      <img src={accommodation.image} alt={accommodation.name} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4">{accommodation.description}</p>
      <h2 className="mt-6 text-xl font-semibold">Amenities:</h2>
      <ul className="mt-2">
        {accommodation.amenities.map((amenity, index) => (
          <li key={index} className="text-gray-600">{amenity}</li>
        ))}
      </ul>

      {/* Booking Form */}
      <h2 className="mt-6 text-xl font-semibold">Book Your Stay</h2>
      <form onSubmit={handleBooking} className="mt-4">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium">Check-In Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Check-Out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Number of Guests:</label>
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              min="1"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
