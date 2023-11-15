import { createSlice } from '@reduxjs/toolkit';

// userInfo Slice
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {
      users: [ ],
    },
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Export action creators for the quizName slice
export const { setUserInfo } = userInfoSlice.actions;

// Export the quizName reducer
export const userInfoReducer = userInfoSlice.reducer;
