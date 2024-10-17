import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (state, action) => {
            const index = state.findIndex(fav => fav.id === action.payload.id);
            if (index >= 0) {
                // If it's already a favorite, remove it
                state.splice(index, 1);
            } else {
                // Otherwise, add it to favorites
                state.push(action.payload);
            }
        },
        setFavorites: (state, action) => {
            return action.payload; // For loading favorites from local storage or API
        }
    }
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
