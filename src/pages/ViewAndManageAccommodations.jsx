import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodations, deleteAccommodation } from '../features/accommodationSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ViewAndManageAccommodation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accommodations = useSelector((state) => state.accommodations.list);

  // Fetch accommodations when the component mounts
  useEffect(() => {
    dispatch(fetchAccommodations());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteAccommodation(id));
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-accommodation/${id}`);
  };

  return (
    <div className="py-16 px-8">
      <h2 className="text-2xl font-bold mb-4">Manage Accommodations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accommodations.map((accommodation) => (
          <div key={accommodation.id} className="shadow-lg rounded-lg p-4 bg-white">
            <img src={accommodation.imageUrl} alt={accommodation.name} className="rounded mb-2" />
            <h3 className="text-lg font-semibold">{accommodation.name}</h3>
            <p className="text-gray-600">${accommodation.price}</p>
            <p className="text-gray-500">{accommodation.address}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(accommodation.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => handleDelete(accommodation.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAndManageAccommodation;
