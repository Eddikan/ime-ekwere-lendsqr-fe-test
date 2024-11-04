import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state and type
interface UserState {
  email: string | null;
}

const initialState: UserState = {
  email: null,
};

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
});

// Export actions and reducer
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
