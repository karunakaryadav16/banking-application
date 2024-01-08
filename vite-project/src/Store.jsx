// Store.jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create user slice

// const initialState= {
//     name: '',
//     location: '',
//     description: '',
//   }
// console.log(initialState)
// setUserDetails: (state, action) => {
//     state.name = action.payload.name;
//     state.location = action.payload.location;
//     state.description = action.payload.description;
// const initialState = []

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserDetails: (state, action) => {
//         state.push(action.payload)
//     },
//     clearUserDetails: (state) => {
//       state.name = '';
//       state.location = '';
//       state.description = '';
//     }
//   }
// });

// export const { setUserDetails, clearUserDetails } = userSlice.actions;



//  export const store =configureStore({
//     reducer: {
//       user: userSlice.reducer
//     }
//   });


const initialState = [];
console.log(initialState)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.push(action.payload);
    },
    clearUserDetails: (state) => {
      return initialState; // Resetting the state to its initial value (empty array)
    },
    removeUserDetails: (state, action) => {
        const Id = action.payload;
        const index = state.findIndex(item => item.Id === Id); // Find the index of the item with the specified Id
        if (index !== -1) {
          state.splice(index, 1); // Remove the item from the array
        }
      },












  }
});

export const { setUserDetails, clearUserDetails, removeUserDetails } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
