import { createSlice } from '@reduxjs/toolkit';

// const [createModalState, seCreateModalState] = useState(false);
// const [deleteModalState, seDeleteModalState] = useState(false);
// const [categoriesArray, setCategoriesArray] = useState([]);
// const [deleteCategory, setDeleteCategory] = useState([]);
// const [selectedCategoryId, setSelectedCategoryId] = useState([]);
const catsArray = [
  { Name: "Science", Color: '#a7d7f9', id: 1, Favorite: true },
  { Name: "Maths", Color: '#67c27c', id: 2, Favorite: false },
  { Name: "English", Color: '#cfd9fa', id: 3, Favorite: true },
  { Name: "Cat4", Color: '#f4bbc7', id: 4, Favorite: false },
  { Name: "Physics", Color: '#c0f889', id: 5, Favorite: false },
  { Name: "Chemistry", Color: '#f4bbc7', id: 6, Favorite: true },
  { Name: "Algebra", Color: '#cfd9fa', id: 7, Favorite: false },
  { Name: "Geometry", Color: '#67c27c', id: 8, Favorite: false },
  { Name: "Calculus", Color: '#cfd9fa', id: 9, Favorite: false },
  { Name: "Social Studies", Color: '#f4bbc7', id: 10, Favorite: true },
  { Name: "Anthropology", Color: '#c0f889', id: 11, Favorite: false },
  { Name: "Philosophy", Color: '#c0f889', id: 12, Favorite: false },
  { Name: "Literature", Color: '#a7d7f9', id: 13, Favorite: true },
  { Name: "French", Color: '#f4bbc7', id: 14, Favorite: false },
  { Name: "Spanish", Color: '#c0f889', id: 15, Favorite: false },
  { Name: "German", Color: '#cfd9fa', id: 16, Favorite: false },
  { Name: "Biology", Color: '#c0f889', id: 17, Favorite: true },
  { Name: "Psychology", Color: '#67c27c', id: 18, Favorite: false },
  { Name: "Accounting", Color: '#a7d7f9', id: 19, Favorite: false },
  { Name: "Computers", Color: '#67c27c', id: 20, Favorite: false },
  { Name: "Web Development", Color: '#c0f889', id: 21, Favorite: false },
  { Name: "Design", Color: '#f4bbc7', id: 22, Favorite: false },
  { Name: "Art", Color: '#a7d7f9', id: 23, Favorite: false },
  { Name: "Micro Biology", Color: '#c0f889', id: 24, Favorite: false },
  { Name: "Forensic Science", Color: '#67c27c', id: 25, Favorite: false },
  { Name: "Shakespeare", Color: '#f4bbc7', id: 26, Favorite: false },
  { Name: "Science Fiction", Color: '#67c27c', id: 27, Favorite: true },
  { Name: "Creative Writing", Color: '#a7d7f9', id: 28, Favorite: true },
];

// categories array Slice
export const categoriesArraySlice = createSlice({
  
  name: 'categoriesArray',
  initialState: [...catsArray],
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
    resetCategories: (state) => {
      return [...catsArray];
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