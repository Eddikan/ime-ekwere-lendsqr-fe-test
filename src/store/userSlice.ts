import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from "@/interfaces/users";
import { fetchData } from "@/services/api"; // Make sure to adjust the import according to your structure

// Define the initial state and type
interface UserState {
  email: string | null;
  users: UserType[];
  loading: boolean; // Add loading state
  error: string | null; // Add error state
}

const initialState: UserState = {
  email: null,
  users: [],
  loading: false,
  error: null,
};

// Create an asynchronous thunk action to fetch users
export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await fetchData(); // Call your fetch function
  return response; // This will be the action's payload
});

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = null;
    },
  },
  // Add extra reducers to handle the async thunk
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true; // Set loading to true when the request starts
        state.error = null; // Reset error
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
        state.loading = false; // Set loading to false when the request is successful
        state.users = action.payload; // Store users in the state
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request fails
        state.error = action.error.message || 'Failed to fetch users'; // Set the error message
      });
  },
});

// Export actions and reducer
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
