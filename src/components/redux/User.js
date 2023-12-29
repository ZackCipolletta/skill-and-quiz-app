import { createSlice } from '@reduxjs/toolkit';
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../../firebase";
import {
  addDoc, doc, getDocs, onSnapshot, updateDoc, setDoc, deleteDoc, collection,
  serverTimestamp, getDoc, query, where, orderBy, limit, startAt,
} from 'firebase/firestore';




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




// loggedInUsersFavCats Slice
export const loggedInUserFavCatsSlice = createSlice({
  name: 'loggedInUserFavCats',
  initialState: [], // Initialize with an empty array
  reducers: {
    setLoggedInUserFavCats: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLoggedInUserFavCats } = loggedInUserFavCatsSlice.actions;

export const loggedInUserFavCatsReducer = loggedInUserFavCatsSlice.reducer;


// Fetch and set the initial state asynchronously
export const loadUserFavCats = () => async (dispatch, getState) => {
  try {

    const auth = getAuth();
    const user = auth.currentUser;

    // Fetch user's data from the database
    const userQuery = query(collection(db, "users"), where("id", "==", user.uid));
    // then we get a snapshot of the corresponding doc
    const querySnapshot = await getDocs(userQuery);

    // check if the snapshot exists (is not empty)
    if (!querySnapshot.empty) {
      // a querySnapshot is a collection, so we assign the first (and only) member of the collection to a variable
      const userDoc = querySnapshot.docs[0];
      // we then assign the favorite property of the categoryDoc to a variable so we can work with it
      const { fav_Cats } = userDoc.data();

      // Dispatch an action to set the initial state
      dispatch(setLoggedInUserFavCats(fav_Cats || []));

    } else {
      throw new Error("Unable to find current user");
    }
  } catch (error) {
    console.error("Error loading fav_Cats: ", error);
    throw error;
  }
};

// Usage in your component or wherever you want to load user fav_Cats
// dispatch(loadUserFavCats());