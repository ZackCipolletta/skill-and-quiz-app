import { createSlice } from '@reduxjs/toolkit';

// const [createModalState, seCreateModalState] = useState(false);
// const [deleteModalState, seDeleteModalState] = useState(false);
// const [categoriesArray, setCategoriesArray] = useState([]);
// const [deleteCategory, setDeleteCategory] = useState([]);
// const [selectedCategoryId, setSelectedCategoryId] = useState([]);


// categories array Slice
export const categoriesArraySlice = createSlice({
  name: 'categoriesArray',
  initialState: [
    { Name: "Science", Color: '#a7d7f9', id: 1, Favorite: true },
    { Name: "Maths", Color: '#67c27c', id: 2, Favorite: false },
    { Name: "English", Color: '#cfd9fa', id: 3, Favorite: true },
    { Name: "Cat4", Color: '#f4bbc7', id: 4, Favorite: false },
    { Name: "Cat55", Color: '#c0f889', id: 5, Favorite: false },
    { Name: "Cat6", Color: '#cfd9fa', id: 6, Favorite: true },
  ],
  reducers: {
    setCategoriesArray: (state, action) => {
      return action.payload;
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Export action creators for the categoriesArray slice
export const { setCategoriesArray, addCategory } = categoriesArraySlice.actions;

// Export the categoriesArray reducer
export const categoriesArrayReducer = categoriesArraySlice.reducer;