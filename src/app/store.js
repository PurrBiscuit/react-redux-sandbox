import { configureStore } from '@reduxjs/toolkit';

import backgroundReducer from '../features/theme/backgroundSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    counter: counterReducer,
  },
});
