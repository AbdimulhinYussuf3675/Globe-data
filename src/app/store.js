import { configureStore } from '@reduxjs/toolkit';
import countrieSlice from 'features/countries/countrieSlice';

const store = configureStore({
  reducer: {
    countrieSlice,
  },
});

export default store;
