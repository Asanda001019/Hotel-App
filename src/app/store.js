import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/registerSlice'; // Adjust the path if necessary
import favoritesReducer from '../features/favouriteSlice'; // Adjust the path as necessary
import accommodationReducer from '../features/accommodationSlice';

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,


    register: registerReducer,
    // Add other reducers here as needed

    accommodations: accommodationReducer,
  },
});

export default store;
