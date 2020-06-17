import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'features/Authentication/authSlice';

const rootReducer = {
  userData: authReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store; 