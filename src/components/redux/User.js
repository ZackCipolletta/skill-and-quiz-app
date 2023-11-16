import { createSlice } from '@reduxjs/toolkit';

// userInfo Slice
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    users: [],
  },
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setUserInfo: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

// Export action creators for the quizName slice
export const { deleteUser, setUserInfo } = userInfoSlice.actions;

// Export the quizName reducer
export const userInfoReducer = userInfoSlice.reducer;
