import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../features/favouriteSlice'; // Adjust the path as necessary

export default function AccommodationCard({ accommodation }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorited = favorites.some((fav) => fav.id === accommodation.id);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(accommodation)); // Dispatch the toggleFavorite action
  };

  const handleReadMore = () => navigate(`/accommodation/${accommodation.id}`);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-20">
      <img className="w-full h-35 object-cover" src={accommodation.image} alt={accommodation.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{accommodation.name}</h3>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
          {accommodation.amenities.map((amenity, index) => (
            <li key={index} className="bg-gray-200 px-2 py-1 rounded-full">{amenity}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between mt-4">
          <button onClick={handleFavoriteClick} className={`p-2 ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}>
            <HeartIcon className="h-6 w-6" />
          </button>
          <button
            onClick={handleReadMore}
            className="text-blue-500 hover:underline font-semibold"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
