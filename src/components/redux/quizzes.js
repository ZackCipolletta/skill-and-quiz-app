import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const quizArr = [
  {
    Name: "Physics", Category: 'Science', Image: '/CategoryImages/Beakers.jpg', Color: '#a7d7f9', tags: ['Tag1', 'Tag2', 'Tag3',], id: uuidv4(), Favorite: false, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 0,
        question: 'What is the fastest route of all time?',
        answers: ['The Kessel run', 'qwerty', 'what?', 'qwerty'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [1, 2],
        question: 'How many planets are there in the solar system?',
        answers: ['1', '8', '9'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'How many planets are there in the solar system?',
        answers: [],
      }
    ],
  },
  {
    Name: "Astronomy", Category: 'Science', Color: '#67c27c', tags: ['TagA', 'TagB', 'TagC'], id: uuidv4(), Favorite: false, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 1,
        question: 'What month is it?',
        answers: ['November', 'December', 'January', 'Match'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [0],
        question: 'How many days in a year?',
        answers: ['365', '366', '364'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'What is the name of Eath\'s only natural satellite?',
        answers: [],
      }
    ],
  },
  {
    Name: "Algebra", Category: 'Maths', Color: '#cfd9fa', tags: ['TagB', 'TagC'], id: uuidv4(), Favorite: false, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 1,
        question: 'Are dogs mammals?',
        answers: ['No', 'Yes'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [2],
        question: 'What is the largest mammal on earth?',
        answers: ['Elephant', 'Fin Whale', 'Blue Whale'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'How many planets are there in the solar system?',
        answers: [],
      }
    ],
  },
  {
    Name: "Calculus", Category: 'Maths', Color: '#f4bbc7', tags: ['TagC'], id: uuidv4(), Favorite: false, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: false,
        correct: 2,
        question: 'Who sang the title song for the latest Bond film, No Time to Die?',
        answers: ['Adele', 'Sam Smith', 'Billie Eilish?'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [2],
        question: 'Which city is home to the Brandenburg Gate?',
        answers: ['Vienna', 'Zurich', 'Berlin', 'Prague'],
      },
      {
        id: 2,
        type: 'Type',
        favorite: false,
        question: 'Which country flies a green, white, and orange (in that order) flag?',
        answers: [],
      }
    ],
  },
  {
    Name: "Trigonometry", Category: 'Maths', Color: '#c0f889', tags: ['Tag2', 'TagC'], id: uuidv4(), Favorite: true, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: [2],
        question: 'If you were looking at Iguazu Falls, on what continent would you be?',
        answers: ['Asia', 'Africa', 'South America', 'Europe'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [1],
        question: 'Which of the following languages has the longest alphabet?',
        answers: ['Greek ', 'Russian', 'Arabic'],
      },
      {
        id: 2,
        type: 'Single',
        favorite: false,
        question: 'Who was the lead singer of the band The Who?',
        answers: ['Roger Daltrey', 'Don Henley', 'Robert Plant'],
      }
    ],
  },
  {
    Name: "Shakespeare", Category: 'English', Image: '/CategoryImages/Scientist.png', Color: '#c0f889', tags: ['Tag2', 'TagC'], id: uuidv4(), Favorite: true, questions: [
      {
        id: 0,
        type: 'Single',
        favorite: true,
        correct: 3,
        question: 'What spirit is used in making a Tom Collins?',
        answers: ['Vodka', 'Rum', 'Whiskey', 'Gin'],
      },
      {
        id: 1,
        type: 'Single',
        favorite: false,
        correct: [2],
        question: 'Which app has the most total users?',
        answers: ['TikTok', 'Snapchat', 'Instagram', 'Facebook'],
      },
      {
        id: 2,
        type: 'Single',
        favorite: false,
        correct: [2],
        question: ' What city hosted the 2002 Olympic Games?',
        answers: ['Tokyo', 'Beijing', 'Sydney'],
      }
    ],
  }
];

// quizzes array Slice
export const quizzesArraySlice = createSlice({

  name: 'quizzesArray',
  initialState: [],
  reducers: {
    setQuizzesArray: (state, action) => {
      return action.payload;
    },
    addQuiz: (state, action) => {
      state.push(action.payload[0]);
    },
    favoriteQuiz: (state, action) => {
      // here we pass in an id of a selected quiz and then find that quiz in the array 
      // of all quizzes and assign it to the variable 'quizFavToggle'
      const quizFavToggle = state.find(quiz => quiz.id === action.payload);
      if (quizFavToggle) {
        // we then toggle the 'Favorite' attribute to the opposite of whatever value it was assigned (true or false);
        quizFavToggle.Favorite = !quizFavToggle.Favorite;
      }
    },
    deleteQuiz: (state, action) => {
      return state.filter(quiz => quiz.id !== action.payload);
    },
    searchQuizzes: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return state.filter(quiz => quiz.Name.toLowerCase().includes(searchTerm));
    },
    resetQuizzes: (state) => {
      return [...quizArr];
    },
  },
});

// const filtered = quizzesArray.filter((quiz) =>
// quiz.Name.toLowerCase().includes(searchValue.toLowerCase())
// );
// setFilteredQuizzes(filtered);


// Export action creators for the quizzesArray slice
export const { setQuizzesArray, addQuiz, favoriteQuiz, deleteQuiz, searchQuizzes, resetQuizzes } = quizzesArraySlice.actions;

// Export the quizzesArray reducer
export const quizzesArrayReducer = quizzesArraySlice.reducer;