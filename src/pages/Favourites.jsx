import React from 'react';
import { useSelector } from 'react-redux';
import AccommodationCard from '../pages/AccommodationCard'; // Adjust the import path as needed

function Favourites() {
  const favorites = useSelector((state) => state.favorites); // Get favorites from Redux store

  return (
    <div>
      <h1 className="text-2xl">Fav Page</h1>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {favorites.length === 0 ? (
          <p>No favorite accommodations added yet.</p>
        ) : (
          favorites.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accommodation={accommodation} />
          ))
        )}
      </div>
    </div>
  );
}

export default Favourites;
