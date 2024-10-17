// // src/components/AdminAddAccommodation.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAccommodation } from '../features/accommodationSlice';

// const AdminAddAccommodation = () => {
//   const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.accommodations);

//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [address, setAddress] = useState('');
//   const [imageFile, setImageFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (imageFile) {
//       dispatch(addAccommodation({ name, price, address, imageFile }));
//       setName('');
//       setPrice('');
//       setAddress('');
//       setImageFile(null);
//     } else {
//       alert('Please upload an image.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center mb-4">Add Accommodation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Accommodation Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImageFile(e.target.files[0])}
//           className="w-full px-4 py-2"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           disabled={status === 'loading'}
//         >
//           {status === 'loading' ? 'Adding...' : 'Add Accommodation'}
//         </button>
//       </form>
//       {status === 'failed' && <p className="text-red-500 text-center mt-4">{error}</p>}
//     </div>
//   );
// };

// export default AdminAddAccommodation;




// src/components/AdminAddAccommodation.js
import React, { useState } from 'react';

const AddAccommodation = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Add Accommodation</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Accommodation Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price per Night</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the price"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter the address"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 w-full text-gray-500"
            required
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Accommodation
        </button>
      </form>
    </div>
  );
};

export default AddAccommodation;
