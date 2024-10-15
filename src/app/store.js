import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/registerSlice'; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    register: registerReducer,
    // Add other reducers here as needed
  },
});

export default store;
