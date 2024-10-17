import React from 'react';
import AccommodationCard from './AccommodationCard';
import image1 from '../assets/image.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export const accommodations = [ // Export the accommodations array
  {
    id: 1,
    name: "Asanda Suite",
    image: image4,
    amenities: ["WiFi", "TV", "Air Conditioning"],
    description: "A luxurious suite with all modern amenities.",
  },
  {
    id: 2,
    name: "Luxury Suite",
    image: image2,
    amenities: ["WiFi", "TV", "Air Conditioning"],
    description: "A luxurious suite with all modern amenities.",
  },
  {
    id: 3,
    name: "Deluxe Suite",
    image: image4,
    amenities: ["WiFi", "TV", "Air Conditioning"],
    description: "A luxurious suite with all modern amenities.",
  },
  {
    id: 4,
    name: "Presidential Suite",
    image: image4,
    amenities: ["WiFi", "TV", "Air Conditioning"],
    description: "A luxurious suite with all modern amenities.",
  },
  // Add more accommodations as needed
];

export default function AccommodationList() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/background.jpg')" }}></div>
      <div className="w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-20">
        {accommodations.map((acc) => (
          <AccommodationCard key={acc.id} accommodation={acc} />
        ))}
      </div>
    </div>
  );
}
