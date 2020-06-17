import { createSlice } from '@reduxjs/toolkit';

const userData = createSlice({
  name: 'userData',
  initialState: {
    token: undefined,
    user: undefined
  },

  reducers: {
    logUp: (state, action) => {
      // const newPhoto = action.payload;
      return action.payload;
    },
    logIn: (state, action) => {
      // const newPhoto = action.payload;
      return action.payload;
    },
    logOut: (state, action) => {
      return {
        token: undefined,
        user: undefined
      }
    }
  }
});

const { reducer, actions } = userData;
export const { logUp, logIn, logOut} = actions;
export default reducer; 