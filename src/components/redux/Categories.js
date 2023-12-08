import { createSlice } from '@reduxjs/toolkit';

// categories array Slice
export const categoriesArraySlice = createSlice({
  
  name: 'categoriesArray',
  initialState: [],
  reducers: {
    setCategoriesArray: (state, action) => {
      return action.payload;
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    favoriteCategory: (state, action) => {
      // here we pass in an id of a selected category and then find that category in the array 
      // of all categories and assign it to the variable 'categoryFavToggle'
      const categoryFavToggle = state.find(category => category.id === action.payload);
      if (categoryFavToggle) {
        // we then toggle the 'Favorite' attribute to the opposite of whatever value it was assigned (true or false);
        categoryFavToggle.Favorite = !categoryFavToggle.Favorite;
      }
    },
    deleteCategory: (state, action) => {
      console.log('reached here');
      console.log(action.payload);
      return state.filter(category => category.id !== action.payload);
    },
    searchCategories: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.filter(category => category.Name.toLowerCase().includes(searchTerm));
    },
  },
});

// const filtered = categoriesArray.filter((cat) =>
// cat.Name.toLowerCase().includes(searchValue.toLowerCase())
// );
// setFilteredCategories(filtered);


// Export action creators for the categoriesArray slice
export const { setCategoriesArray, addCategory, favoriteCategory, deleteCategory, searchCategories, resetCategories } = categoriesArraySlice.actions;

// Export the categoriesArray reducer
export const categoriesArrayReducer = categoriesArraySlice.reducer;



// Name: "Quiz4", Category: 'Maths', Color: '#f4bbc7', tags: ['TagC'], id: uuidv4(), Favorite: false, questions: [

// quiz Category Slice
export const quizCategorySlice = createSlice({
  name: 'quizCategory',
  initialState: {
    quizCategory: null,
  },
  reducers: {
    setQuizCategory: (state, action) => {
      state.quizCategory = action.payload;
    },
    resetQuizCategory: (state) => {
      return quizCategorySlice.initialState;
    },
  },
});

// Export action creators for the quizCategory slice
export const { setQuizCategory, resetQuizCategory } = quizCategorySlice.actions;

// Export the quizCategory reducer
export const quizCategoryReducer = quizCategorySlice.reducer;