const quizArr = [
  {
    Name: "Quiz1", Image: '/CategoryImages/Beakers.jpg', Color: '#a7d7f9', tags: ['Tag1', 'Tag2', 'Tag3',], id: 1, Favorite: false, questions: [
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
    Name: "Quiz2", Color: '#67c27c', tags: ['TagA', 'TagB', 'TagC'], id: 2, Favorite: false, questions: [
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