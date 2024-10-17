// // src/features/accommodationSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { db, storage } from '../firebase'; // Make sure firebase is set up with Firestore and Storage imports
// import { addDoc, collection } from 'firebase/firestore';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// // Thunk to handle adding accommodation to Firestore with image upload
// export const addAccommodation = createAsyncThunk(
//   'accommodations/addAccommodation',
//   async ({ name, price, address, imageFile }, thunkAPI) => {
//     try {
//       // Upload the image to Firebase Storage
//       const storageRef = ref(storage, `accommodations/${imageFile.name}`);
//       await uploadBytes(storageRef, imageFile);
//       const imageUrl = await getDownloadURL(storageRef);

//       // Save accommodation details to Firestore
//       const docRef = await addDoc(collection(db, 'accommodations'), {
//         name,
//         price,
//         address,
//         imageUrl,
//       });
//       return { id: docRef.id, name, price, address, imageUrl };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const accommodationSlice = createSlice({
//   name: 'accommodations',
//   initialState: {
//     accommodations: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addAccommodation.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(addAccommodation.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.accommodations.push(action.payload);
//       })
//       .addCase(addAccommodation.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default accommodationSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock fetch accommodations for local data
export const fetchAccommodations = createAsyncThunk(
  'accommodations/fetchAccommodations',
  async () => {
    // Replace with Firebase fetch in production
    return [
      { id: 1, name: 'Ocean View Suite', price: 120, address: 'Beachfront, Miami', imageUrl: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Mountain Cabin', price: 90, address: 'Hillside, Denver', imageUrl: 'https://via.placeholder.com/150' },
    ];
  }
);

export const deleteAccommodation = createAsyncThunk(
  'accommodations/deleteAccommodation',
  async (id) => {
    // Replace with Firebase delete logic in production
    return id;
  }
);

const accommodationSlice = createSlice({
  name: 'accommodations',
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodations.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(deleteAccommodation.fulfilled, (state, action) => {
        state.list = state.list.filter((accommodation) => accommodation.id !== action.payload);
      });
  },
});

export default accommodationSlice.reducer;
