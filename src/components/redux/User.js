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

// Export action creators for the userInfo slice
export const { deleteUser, setUserInfo } = userInfoSlice.actions;

// Export the userInfo reducer
export const userInfoReducer = userInfoSlice.reducer;




// loggedInUserEmail Slice
export const loggedInUserEmailSlice = createSlice({
  name: 'loggedInUserEmail',
  initialState: {
    user: null,
  },
  reducers: {
    setLoggedInUserEmail: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export action creators for the currentUser slice
export const { setLoggedInUserEmail } = loggedInUserEmailSlice.actions;

// Export the currentUser reducer
export const loggedInUserEmailReducer = loggedInUserEmailSlice.reducer;




// loggedInUserID Slice
export const loggedInUserIDSlice = createSlice({
  name: 'loggedInUserID',
  initialState: null,
  reducers: {
    setLoggedInUserID: (state, action) => {
      return action.payload;
    },
  },
});

// Export action creators for the loggedInUserID slice
export const { setLoggedInUserID } = loggedInUserIDSlice.actions;

// Export the loggedInUserID reducer
export const loggedInUserIDReducer = loggedInUserIDSlice.reducer;