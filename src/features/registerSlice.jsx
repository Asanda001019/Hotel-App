import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 

// Thunk for registering a new user
export const registerUser = createAsyncThunk(
  'register/registerUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

// Initial state for registration slice
const initialState = {
  user: null,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // stores the registered user data
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; // stores the error message
      });
  },
});

// Export the reducer
export default registerSlice.reducer;

