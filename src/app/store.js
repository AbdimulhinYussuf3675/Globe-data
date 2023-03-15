import { configureStore } from '@reduxjs/toolkit';
import countries from 'features/countries/countrieSlice';

const store = configureStore({
  reducer: {
    countries,
  },
});

export default store;
