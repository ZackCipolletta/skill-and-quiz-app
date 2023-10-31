import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'counter',
  initialState: {
    options: 0
  },
  reducers: {
    increaseOptions: (state) => {
      state.options += 1;
    },
    decreaseOptions: (state) => {
      state.options -= 1;
    },
    setOptionsTo: (state, action) => {
      state.options = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseOptions, decreaseOptions, setOptionsTo } = optionsSlice.actions;

export default optionsSlice.reducer;


// export const questionSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = questionSlice.actions

// export default questionSlice.reducer
